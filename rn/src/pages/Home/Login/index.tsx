// Copyright 2021 delfi
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import Input from '../../../components/Input';
import {IInputActions} from '../../../components/Input/IInputProps';
import Auth from '@react-native-firebase/auth';
import {useAuth} from '../../../hooks/auth';

import {
    ContainerGeral,
    Container,
    TextPrincipal,
    ContainerText,
    TextSecundario,
    InputContainer,
    ContainerInput,
    ContainerButton,
    ButtonLogin,
    ButtonText,
} from './styles';

const Login: React.FC = () => {
    const emailRef = React.useRef<IInputActions>(null);
    const passwordRef = React.useRef<IInputActions>(null);

    const [email, setEmail] = React.useState('');
    const [passWord, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const {entrar} = useAuth();

    const regEmail = React.useMemo(
        () =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        [],
    );

    const handleEmailChange = React.useCallback((e: string) => {
        setEmail(e);
    }, []);

    const handlePasswordChange = React.useCallback((e: string) => {
        setPassword(e);
    }, []);

    const handleEmailBlur = React.useCallback(() => {
        setEmailError(false);
        const emailValue = emailRef.current!.value;
        if (!emailValue) {
            setEmailError(true);
        }

        const valid = regEmail.test(String(emailValue).toLowerCase());
        setEmailError(!valid);
    }, [regEmail]);

    const handlePasswordBlur = React.useCallback(() => {
        setPasswordError(false);

        const password = passwordRef.current!.value;
        if (!password || password.length >= 6) {
            setPasswordError(true);
        }
    }, []);

    const handleLogin = React.useCallback(async () => {
        console.log('inicio');
        try {
            await entrar({
                user_email: email,
                user_password: passWord,
            });
        } catch (error) {
            console.error('erro - ', error.message);
        }
    }, []);

    return (
        <ContainerGeral>
            <Container>
                <ContainerText>
                    <TextPrincipal>Bem vindo de volta!</TextPrincipal>
                    <TextSecundario>
                        Por favor, informe suas informações
                    </TextSecundario>
                </ContainerText>
                <ContainerInput>
                    <InputContainer>
                        <Input
                            error={emailError}
                            ref={emailRef}
                            onBlur={() => handleEmailBlur()}
                            onChangeText={handleEmailChange}
                            name="E-mail"
                            icon="mail"
                            type="dark"
                            autoCompleteType="email"
                            autoFocus
                            returnKeyType="next"
                            onSubmitEditing={() => passwordRef.current?.focus()}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            error={passwordError}
                            ref={passwordRef}
                            onBlur={() => handlePasswordBlur()}
                            onChangeText={handlePasswordChange}
                            name="Senha"
                            icon="lock"
                            type="dark"
                            returnKeyType="send"
                            onSubmitEditing={() => handleLogin()}
                        />
                    </InputContainer>
                </ContainerInput>
                <ContainerButton>
                    <ButtonLogin onPress={handleLogin}>
                        <ButtonText>Logar</ButtonText>
                    </ButtonLogin>
                </ContainerButton>
            </Container>
        </ContainerGeral>
    );
};

export default Login;
