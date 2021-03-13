import React from 'react';
import {
    MainText,
    Container,
    ContainerInput,
    ContainerButton,
    TextButton,
    ContainerText,
    SubText,
} from './styles';
import {useDarkMode} from 'react-native-dark-mode';
import {useNavigation} from '@react-navigation/native';
import MaterialInput from '../../components/Input/MaterialInput';
import {IInputActions} from '@components/Input/IInputProps';

const Login: React.FC = () => {
    const navigation = useNavigation();

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

    const teste = () => {
        console.log(inputEmailRef.current?.value);
    };

    return (
        <Container>
            <ContainerText>
                <MainText>Bem vindo de volta!</MainText>
                <SubText>Porfavor informe suas credenciais</SubText>
            </ContainerText>
            <ContainerInput>
                <MaterialInput
                    type="light"
                    name="email"
                    returnKeyType="next"
                    placeholder=""
                    onBlur={() => validEmail()}
                    onSubmitEditing={() => inputPasswordRef.current?.focus()}
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

            <ContainerButton onPress={teste} activeOpacity={0.8}>
                <TextButton>Entrar</TextButton>
            </ContainerButton>
        </Container>
    );
};

export default Login;
