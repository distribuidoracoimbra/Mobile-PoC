import {TextInputProps} from 'react-native';
// import {MaterialIcons} from '@expo/vector-icons';

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
