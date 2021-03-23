import React from 'react';
import {FlatList, Text, View} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {ActivityIndicator} from 'react-native-paper';
import notify from './data.json';

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
    const LeftActions = () => {
        return (
            <ContainerOfMakeReading type="READING">
                <TextOfHandlingNotify>Concluir</TextOfHandlingNotify>
            </ContainerOfMakeReading>
        );
    };

    const RigthActions = () => {
        return (
            <ContainerOfMakeReading type="REPORT">
                <TextOfHandlingNotify>REPORTAR</TextOfHandlingNotify>
            </ContainerOfMakeReading>
        );
    };

    return (
        <Swipeable
            renderLeftActions={LeftActions}
            renderRightActions={RigthActions}
            onSwipeableRightOpen={() => onDelete(data.id)}>
            <ContainerNotification>
                <TextOfNotification>{data.text}</TextOfNotification>
                <ContainerDataPublicacao>
                    <TextOfHour>{data.data}</TextOfHour>
                </ContainerDataPublicacao>
            </ContainerNotification>
        </Swipeable>
    );
};

const Notification: React.FC = () => {
    const [notifcations, setNotifications] = React.useState<
        INotificationsData[]
    >(() => data);

    const removeItem = React.useCallback((id: number) => {
        setNotifications((oldState) =>
            oldState.filter((state) => state.id !== id),
        );
    }, []);

    if (!notifcations || notifcations.length <= 0) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <ActivityIndicator />
            </View>
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

export default Notification;
