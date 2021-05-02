import React from 'react';
import {FlatList, SafeAreaView, Text, View, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import LottieAnimation from 'lottie-react-native';
import notify from './data.json';
import * as Animation from 'react-native-animatable';

import {
    Container,
    ContainerNotification,
    ContainerTitle,
    Title,
    TextOfNotification,
    ContainerDataPublicacao,
    TextOfHour,
    ContainerOfMakeReading,
    TextOfHandlingNotify,
} from './styles';

const data = notify.notify;

interface INotificationsData {
    id: number;
    text: string;
    data: string;
}

interface ListItemProps {
    data: INotificationsData;
    onDelete: (id: number) => void;
}

const ListItemOfNotification: React.FC<ListItemProps> = ({data, onDelete}) => {
    const animationContainerRef = React.useRef<any>(null);

    const RigthActions = () => {
        return (
            <ContainerOfMakeReading type="REPORT">
                <TextOfHandlingNotify>Deletar</TextOfHandlingNotify>
            </ContainerOfMakeReading>
        );
    };

    const handleDeleteInfo = React.useCallback(() => {
        animationContainerRef.current!.bounceOutLeft();
        setInterval(() => {
            onDelete(data.id);
        }, 1000);
    }, [data.id, onDelete]);

    return (
        <Animation.View
            ref={animationContainerRef}
            style={{
                flex: 1,
            }}
            onAnimationEnd={() => console.log('acabando')}>
            <Swipeable
                renderRightActions={RigthActions}
                onSwipeableRightOpen={handleDeleteInfo}>
                <ContainerNotification>
                    <TextOfNotification>{data.text}</TextOfNotification>
                    <ContainerDataPublicacao>
                        <TextOfHour>{data.data}</TextOfHour>
                    </ContainerDataPublicacao>
                </ContainerNotification>
            </Swipeable>
        </Animation.View>
    );
};

export const Notificacoes: React.FC = () => {
    const [notifcations, setNotifications] = React.useState<
        INotificationsData[]
    >(() => data);

    const removeItem = React.useCallback((id: number) => {
        setNotifications((oldState) =>
            oldState.filter((state) => state.id !== id),
        );
    }, []);

    const dimensoes = React.useMemo(() => {
        return Dimensions.get('window').width;
    }, []);

    if (!notifcations || notifcations.length <= 0) {
        return (
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        alignItems: 'center',
                    }}>
                    <LottieAnimation
                        resizeMode="contain"
                        hardwareAccelerationAndroid
                        autoPlay
                        loop
                        style={{
                            display: 'flex',
                        }}
                        source={require('./rocket-dog.json')}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            color: 'rgba(0,0,0,0.8)',
                            marginTop: dimensoes / 2,
                        }}>
                        Não há nada aqui
                    </Text>
                </View>
            </SafeAreaView>
        );
    }
    return (
        <Container>
            <ContainerTitle>
                <Title>Suas notificações</Title>
            </ContainerTitle>
            <FlatList<INotificationsData>
                data={notifcations}
                keyExtractor={({id}) => String(id)}
                renderItem={({item}) => {
                    return (
                        <ListItemOfNotification
                            data={item}
                            onDelete={removeItem}
                        />
                    );
                }}
            />
        </Container>
    );
};
