import React from 'react';
import {
    MainText,
    Container,
    ContainerInput,
    ContainerText,
    SubText,
    ForgotPasswordLink,
    TextLink,
} from './styles';
import {useCardAnimation} from '@react-navigation/stack';
import {useDarkMode} from 'react-native-dark-mode';
import {useNavigation} from '@react-navigation/native';
import MaterialInput from '../../components/Input/MaterialInput';
import {IInputActions} from '@components/Input/IInputProps';
import {useAuth} from '../../hooks/auth';
// import SystemInput from '../../components/Input/SystemInput';
import Button from '../../components/Button/LinearGradienteButton';
import {Animated, ToastAndroid} from 'react-native';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const {current} = useCardAnimation();
    const {signIn} = useAuth();

    const [emailError, setEmailError] = React.useState<boolean>(false);
    const [passwordError, setPasswordError] = React.useState<boolean>(false);

    const inputEmailRef = React.useRef<IInputActions>(null);
    const inputPasswordRef = React.useRef<IInputActions>(null);
    const isDark = useDarkMode();

    const regEmail = React.useMemo(
        () =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        [],
    );

    React.useEffect(() => {
        if (isDark) {
            navigation.setOptions({
                headerTintColor: '#fff',
            });
        }
    }, [isDark, navigation]);

    const validEmail = React.useCallback(() => {
        if (inputEmailRef.current!.value.length > 0) {
            const valid = regEmail.test(
                String(inputEmailRef.current!.value).toLowerCase(),
            );
            setEmailError(!valid);
        }
    }, [inputEmailRef, regEmail]);

    const validPassword = React.useCallback(() => {
        if (inputPasswordRef.current!.value.length > 0) {
            setPasswordError(inputPasswordRef.current!.value.length < 6);
        }
    }, []);

    const handleLogin = React.useCallback(async () => {
        setEmailError(false);
        setPasswordError(false);

        if (!inputEmailRef.current!.value || !inputPasswordRef.current!.value) {
            if (!inputEmailRef.current!.value) {
                setEmailError(true);
            }
            if (!inputPasswordRef.current!.value) {
                setPasswordError(true);
            }

            ToastAndroid.showWithGravity(
                'Preencha todos os campos corretamente!',
                1500,
                ToastAndroid.BOTTOM,
            );
        } else {
            try {
                await signIn({
                    email: inputEmailRef.current!.value,
                    password: inputPasswordRef.current!.value,
                });
            } catch (error) {
                ToastAndroid.showWithGravity(
                    error.message,
                    1500,
                    ToastAndroid.BOTTOM,
                );
            }
        }
    }, [signIn]);

    return (
        <Animated.View
            style={{
                flex: 1,
                transform: [{scale: current.progress}],
            }}>
            <Container>
                <ContainerText>
                    <MainText>Bem vindo de volta!</MainText>
                    <SubText>Porfavor informe suas credenciais</SubText>
                </ContainerText>
                <ContainerInput>
                    <MaterialInput
                        name="email"
                        type={isDark ? 'dark' : 'light'}
                        returnKeyType="next"
                        placeholder=""
                        onBlur={() => validEmail()}
                        onSubmitEditing={() =>
                            inputPasswordRef.current?.focus()
                        }
                        error={emailError}
                        ref={inputEmailRef}
                    />
                </ContainerInput>
                <ContainerInput>
                    <MaterialInput
                        name="password"
                        type="light"
                        onBlur={validPassword}
                        autoCompleteType="password"
                        secureTextEntry={true}
                        onSubmitEditing={() => {}}
                        error={passwordError}
                        ref={inputPasswordRef}
                    />
                </ContainerInput>

                <Button title="Entrar" onPress={handleLogin} />
                <ForgotPasswordLink>
                    <TextLink>Recuperar senha</TextLink>
                </ForgotPasswordLink>
            </Container>
        </Animated.View>
    );
};

export default Login;
