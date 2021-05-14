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
import {ActivityIndicator, ScrollView, ToastAndroid} from 'react-native';
import {IInputActions} from '../../../components/Input/IInputProps';
import Toast from '../../../components/Toast/index.android';
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

    const {registrar, loading} = useAuth();

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
        if (!password || password.length < 6) {
            setPasswordError(true);
        }
    }, []);

    const handleConfirmationPasswordBlur = React.useCallback(() => {
        setConfirmPasswordError(false);
        const confirmPass = passwordConfirmationRef.current!.value;
        console.log(confirmPass);
        setConfirmPasswordError(!confirmPass);
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
            return;
        }

        try {
            await registrar({
                user_email: email,
                user_password: password,
                user_nome: nome,
            });

            ToastAndroid.showWithGravity(
                'Usuário registrado com sucesso !',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );

            return;
        } catch (error) {
            if (error.code) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        ToastAndroid.showWithGravity(
                            'E-mail já em uso !',
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                        );
                        break;
                    default:
                        ToastAndroid.showWithGravity(
                            `Ocorreu um erro ao tentar registrar o usuário - ${error.message} !`,
                            ToastAndroid.SHORT,
                            ToastAndroid.BOTTOM,
                        );
                        break;
                }
            } else {
                Toast({
                    message: 'Erro inesperado, Por favor tente mais tarde !',
                    type: 'error',
                });

                return;
            }
            console.log(error.code);
            console.error('erro - ', error.message);
        }
    }, [registrar]);

    const ContainerRegistrar = React.useMemo(
        () => (
            <React.Fragment>
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
                                    onBlur={() =>
                                        handleConfirmationPasswordBlur()
                                    }
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
            </React.Fragment>
        ),
        [
            confirmPasswordError,
            emailError,
            handleAuthentication,
            handleConfirmationPasswordBlur,
            handleEmailBlur,
            handleNameBlur,
            handlePasswordBlur,
            nameError,
            passwordError,
        ],
    );

    return (
        <ContainerGeral>
            {loading ? (
                <ActivityIndicator color="grey" size={75} />
            ) : (
                ContainerRegistrar
            )}
        </ContainerGeral>
    );
};

export default Login;
