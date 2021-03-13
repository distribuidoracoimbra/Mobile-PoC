/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, Alert, ToastAndroid} from 'react-native';
import ProfilePNG from '../../../assets/profile.png';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useDarkMode} from 'react-native-dark-mode';

import {
    Container,
    ContainerProfile,
    TextOfUser,
    ContainerBottom,
    ContainerLogin,
} from './styles';

const Usuario: React.FC = () => {
    return (
        <ContainerProfile>
            <Image
                source={ProfilePNG}
                resizeMode="center"
                style={{
                    width: 50,
                    height: 50,
                    marginLeft: 15,
                }}
            />
            <View
                style={{
                    marginLeft: 5,
                }}>
                <TextOfUser type="title">Joãozin Fake Da Silva</TextOfUser>
                <TextOfUser type="normal">Coimbra Eletro PVH - 1</TextOfUser>
            </View>
        </ContainerProfile>
    );
};

const ButtonInferior: React.FC = () => {
    const {navigate} = useNavigation();
    return (
        <ContainerBottom>
            <Usuario />
            <ContainerLogin>
                <Button
                    mode="contained"
                    dark={true}
                    onPress={() => {
                        navigate('Login');
                    }}
                    style={{
                        backgroundColor: '#fff',
                        borderColor: 'black',
                        borderWidth: 1,
                        width: '40%',
                        borderRadius: 10,
                        minHeight: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    labelStyle={{
                        color: 'black',
                        fontWeight: 'bold',
                        letterSpacing: 1,
                    }}>
                    Entrar
                </Button>
                <Button
                    mode="contained"
                    onPress={() => {
                        Alert.alert(
                            'Certeza?',
                            'Deseja apagar este perfil deste celular?',
                            [
                                {
                                    text: 'SIM',
                                    onPress: () =>
                                        ToastAndroid.showWithGravity(
                                            'saindo......',
                                            ToastAndroid.SHORT,
                                            ToastAndroid.BOTTOM,
                                        ),
                                },
                                {
                                    text: 'NÃO',
                                    onPress: () =>
                                        ToastAndroid.showWithGravity(
                                            'ok',
                                            ToastAndroid.SHORT,
                                            ToastAndroid.BOTTOM,
                                        ),
                                },
                            ],
                        );
                    }}
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        borderRadius: 10,
                        minHeight: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    labelStyle={{
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    Sair
                </Button>
            </ContainerLogin>
        </ContainerBottom>
    );
};

const Home: React.FC = () => {
    const isDarkMode = useDarkMode();

    React.useEffect(() => {
        console.log('mudou ', isDarkMode);
    }, [isDarkMode]);

    const Logo = React.useMemo(() => {
        if (!isDarkMode) {
            return (
                <Image
                    source={require('../../../assets/logoDCoimbra/logoDCoimbraLight.png')}
                />
            );
        }
        return (
            <Image
                source={require('../../../assets/logoDCoimbra/logoDCoimbraDark.png')}
            />
        );
    }, [isDarkMode]);

    return (
        <Container>
            {Logo}
            <ButtonInferior />
        </Container>
    );
};

export default Home;
