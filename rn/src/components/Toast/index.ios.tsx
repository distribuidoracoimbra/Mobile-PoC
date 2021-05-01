import React from 'react';
import {ToastAndroid} from 'react-native';
import {IToastProps} from './IToast';

// import { Container } from './styles';

const Toast = ({message, type, time}: IToastProps) => {
    const toastError = React.useCallback(() => {
        ToastAndroid.showWithGravity(
            message
                ? message
                : type === 'error'
                ? 'Ocorreu um erro na operação !'
                : 'Operacação realizada com sucesso !',
            time ? time : ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
        );
    }, [message, time, type]);

    return toastError;
};

export default Toast;
