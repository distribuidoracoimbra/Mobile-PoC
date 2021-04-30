import React from 'react';
import {Animated, Easing} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
    Container,
    ContainerBottom,
    ButtonOfContainer,
    TextOfButton,
} from './styles';

const Home: React.FC = () => {
    const bouncAnimation = React.useRef(new Animated.Value(0)).current;
    const {navigate} = useNavigation();

    const size = React.useMemo(() => {
        return bouncAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 350],
        });
    }, [bouncAnimation]);

    const fadeIn = React.useCallback(() => {
        bouncAnimation.setValue(0);
        Animated.timing(bouncAnimation, {
            toValue: 1,
            duration: 320,
            useNativeDriver: false,
            easing: Easing.ease,
        }).start();
    }, [bouncAnimation]);

    const handleButtonNavigation = React.useCallback(
        (page: string) => {
            navigate(page);
        },
        [navigate],
    );

    React.useEffect(() => {
        fadeIn();
    }, [fadeIn]);

    return (
        <Container>
            <Animated.Image
                source={require('../../../assets/logoDCoimbra/logoDCoimbraLight.png')}
                resizeMode="center"
                style={{
                    opacity: bouncAnimation,
                    width: size,
                    height: size,
                }}
            />
            <ContainerBottom>
                <ButtonOfContainer
                    onPress={() => handleButtonNavigation('login')}
                    style={{
                        elevation: 3,
                    }}>
                    <TextOfButton>Entrar</TextOfButton>
                </ButtonOfContainer>
                <ButtonOfContainer
                    onPress={() => handleButtonNavigation('signup')}
                    style={{
                        elevation: 3,
                    }}
                    background="black">
                    <TextOfButton background="black">Registrar</TextOfButton>
                </ButtonOfContainer>
            </ContainerBottom>
        </Container>
    );
};

export default Home;
