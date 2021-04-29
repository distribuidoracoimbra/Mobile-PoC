import {TextInputProps} from 'react-native';

export interface IInputProps extends TextInputProps {
    icon?: string;
    isFocus?: boolean;
    error: boolean;
    name: string;
    type: 'dark' | 'light';
}

export interface IInputActions {
    focus(): void;
    value: string;
}
