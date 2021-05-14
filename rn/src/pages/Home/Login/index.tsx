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
import {ToastAndroid, ActivityIndicator} from 'react-native';
import {IInputActions} from '../../../components/Input/IInputProps';
import {useAuth} from '../../../hooks/auth';
import Toast from '../../../components/Toast/index.android';

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

    const [_email, _setEmail] = React.useState('');
    const [_password, _setPassword] = React.useState('');
    const [_emailError, _setEmailError] = React.useState(false);
    const [_passwordError, _setPasswordError] = React.useState(false);
    const {entrar, loading} = useAuth();

    const regEmail = React.useMemo(
        () =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        [],
    );

    const handleEmailChange = React.useCallback((e: string) => {
        _setEmail(e);
    }, []);

    const handlePasswordChange = React.useCallback((e: string) => {
        _setPassword(e);
    }, []);

    const handleEmailBlur = React.useCallback(() => {
        _setEmailError(false);

        const valid = regEmail.test(String(_email).toLowerCase());
        console.log(valid);
        _setEmailError(!valid);
    }, [_email, regEmail]);

    const handlePasswordBlur = React.useCallback(() => {
        _setPasswordError(false);

        if (!_password || _password.length < 6) {
            _setPasswordError(true);
        } else {
            _setPasswordError(false);
        }

        console.log(_password);
    }, [_password]);

    const handleLogin = React.useCallback(async () => {
        if (!_email || !_password) {
            console.log('parou na primeira etapa');
            return;
        }

        if (_passwordError || _emailError) {
            console.log('parou na segunda etapa');
            return;
        }
        try {
            await entrar({
                user_email: _email,
                user_password: _password,
            });

            ToastAndroid.showWithGravity(
                'Usuário autenticado com sucesso !',
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
            );
        } catch (error) {
            if (error.code) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        Toast({
                            message: 'E-mail já em uso !',
                            type: 'error',
                        });
                        break;
                    case 'auth/wrong-password':
                        Toast({
                            message: 'Password incorreto !',
                            type: 'error',
                        });
                        break;

                    default:
                        Toast({
                            message: 'O correu um erro - ' + error.message,
                            type: 'error',
                        });
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
    }, [_email, _emailError, _password, _passwordError, entrar]);

    const ContainerLogin = React.useMemo(
        () => (
            <React.Fragment>
                <ContainerText>
                    <TextPrincipal>Bem vindo de volta!</TextPrincipal>
                    <TextSecundario>
                        Por favor, informe suas informações
                    </TextSecundario>
                </ContainerText>
                <ContainerInput>
                    <InputContainer>
                        <Input
                            error={_emailError}
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
                            error={_passwordError}
                            ref={passwordRef}
                            onBlur={() => handlePasswordBlur()}
                            onChangeText={handlePasswordChange}
                            name="Senha"
                            secureTextEntry
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
            </React.Fragment>
        ),
        [
            _emailError,
            _passwordError,
            handleEmailBlur,
            handleEmailChange,
            handleLogin,
            handlePasswordBlur,
            handlePasswordChange,
        ],
    );

    return (
        <ContainerGeral>
            <Container>
                {loading ? (
                    <ActivityIndicator color="grey" size={75} />
                ) : (
                    ContainerLogin
                )}
            </Container>
        </ContainerGeral>
    );
};

export default Login;
