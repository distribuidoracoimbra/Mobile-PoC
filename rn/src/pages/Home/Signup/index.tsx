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
import {ScrollView, ToastAndroid, Alert, Platform} from 'react-native';
import {IInputActions} from '../../../components/Input/IInputProps';
import {} from '../../../components/Toast';
import ValidationError from '../../../utils/erros/ValidationError';
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
} from '../Login/styles';

const Toast = Platform.select({
    android: require('../../../components/Toast/index.android'),
    ios: require('../../../components/Toast/index.ios'),
})();

const Login: React.FC = () => {
    const nomeRef = React.useRef<IInputActions>(null);
    const emailRef = React.useRef<IInputActions>(null);
    const passwordRef = React.useRef<IInputActions>(null);
    const passwordConfirmationRef = React.useRef<IInputActions>(null);

    const [nameError, setNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = React.useState(
        false,
    );

    const {registrar} = useAuth();

    const regEmail = React.useMemo(
        () =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        [],
    );

    const handleEmailBlur = React.useCallback(() => {
        setEmailError(false);
        const emailValue = emailRef.current!.value;
        if (!emailValue) {
            setEmailError(true);
        }

        const valid = regEmail.test(String(emailValue).toLowerCase());
        setEmailError(!valid);
    }, [regEmail]);

    const handleNameBlur = React.useCallback(() => {
        setNameError(false);
        const name = nomeRef.current!.value;
        console.log(name);
        setNameError(!name);
    }, []);

    const handlePasswordBlur = React.useCallback(() => {
        setPasswordError(false);

        const password = passwordRef.current!.value;
        if (!password || password.length >= 6) {
            setPasswordError(true);
        }
    }, []);

    const handleConfirmationPasswordBlur = React.useCallback(() => {
        setConfirmPasswordError(false);
        const confirmPass = passwordConfirmationRef.current!.value;
        console.log(confirmPass);
        setConfirmPasswordError(!confirmPass);
    }, []);

    const alertError = React.useCallback((e: string) => {
        Alert.alert('Ocorreu um erro !', e);
    }, []);

    const toastError = React.useCallback((e?: string) => {
        ToastAndroid.showWithGravity(
            e ? e : 'Ocorreu um erro ao registrar-se',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    }, []);

    const toastSucess = React.useCallback(() => {
        ToastAndroid.showWithGravity(
            'Usuário registrado com sucesso !',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    }, []);

    const handleAuthentication = React.useCallback(async () => {
        const email = emailRef.current!.value;
        const password = passwordRef.current!.value;
        const nome = nomeRef.current!.value;
        const confirmPassWord = passwordConfirmationRef.current!.value;

        console.log(email);
        console.log(password);
        console.log(nome);
        console.log(confirmPassWord);

        if (
            !email ||
            !password ||
            !nome ||
            !confirmPassWord ||
            password.length < 6 ||
            confirmPassWord !== password
        ) {
            Toast();
            return;
        }

        try {
            await registrar({
                email,
                password,
            });

            toastSucess();
        } catch (error) {
            if (error as ValidationError) {
                alertError((error as ValidationError).message);
                return;
            }
            alertError(`Erro inesperado - ${error.message}`);
            console.error(error);
        }
    }, [alertError, registrar, toastError, toastSucess]);

    return (
        <ContainerGeral>
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                }}>
                <Container>
                    <ContainerText>
                        <TextPrincipal>
                            Sera um prazer ter você conosco!
                        </TextPrincipal>
                        <TextSecundario>
                            Por favor, informe suas informações
                        </TextSecundario>
                    </ContainerText>
                    <ContainerInput>
                        <InputContainer>
                            <Input
                                error={nameError}
                                ref={nomeRef}
                                onBlur={() => handleNameBlur()}
                                name="Nome"
                                icon="person"
                                type="dark"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    emailRef.current?.focus()
                                }
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                error={emailError}
                                ref={emailRef}
                                onBlur={() => handleEmailBlur()}
                                name="E-mail"
                                icon="mail"
                                autoCompleteType="email"
                                keyboardType="email-address"
                                onSubmitEditing={() =>
                                    passwordRef.current?.focus()
                                }
                                type="dark"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                error={passwordError}
                                ref={passwordRef}
                                onBlur={() => handlePasswordBlur()}
                                name="Senha"
                                secureTextEntry
                                icon="lock"
                                onSubmitEditing={() =>
                                    passwordConfirmationRef.current?.focus()
                                }
                                type="dark"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                error={confirmPasswordError}
                                ref={passwordConfirmationRef}
                                onBlur={() => handleConfirmationPasswordBlur()}
                                name="Confirmar senha"
                                secureTextEntry
                                icon="lock"
                                type="dark"
                                onSubmitEditing={handleAuthentication}
                            />
                        </InputContainer>
                    </ContainerInput>
                    <ContainerButton>
                        <ButtonLogin onPress={handleAuthentication}>
                            <ButtonText>Registrar</ButtonText>
                        </ButtonLogin>
                    </ContainerButton>
                </Container>
            </ScrollView>
        </ContainerGeral>
    );
};

export default Login;
