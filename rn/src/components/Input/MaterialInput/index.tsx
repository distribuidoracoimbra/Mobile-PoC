import React from 'react';
import {TextInput} from 'react-native-paper';
import {IInputProps, IInputActions} from '../IInputProps';
// import { Container } from './styles';

const MaterialInput: React.ForwardRefRenderFunction<
    IInputActions,
    IInputProps
> = (
    {
        error,
        name,
        icon,
        onSubmitEditing,
        onBlur,
        secureTextEntry,
        returnKeyType,
        type,
    },
    ref,
) => {
    const [value, setValue] = React.useState<string>('');
    const [focus, setFocus] = React.useState<boolean>(false);

    const inputElementRef = React.useRef<any>(null);

    React.useImperativeHandle(ref, () => ({
        focus() {
            inputElementRef.current.focus();
        },
        value,
    }));

    return (
        <TextInput
            ref={inputElementRef}
            onFocus={() => {
                setFocus(true);
            }}
            error={error}
            onSubmitEditing={onSubmitEditing}
            onChangeText={(e) => setValue(e)}
            onBlur={onBlur}
            value={value}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            label={name}
            keyboardAppearance={type}
            autoCorrect={false}
            // autoCompleteType="email"
            theme={{
                colors: {
                    primary: '#0c1d49',
                    background: 'transparent',
                },
                dark: false,
            }}
            left={
                icon && (
                    <TextInput.Icon
                        name={icon}
                        color={focus ? 'white' : 'black'}
                        size={24}
                    />
                )
            }
        />
    );
};

export default React.forwardRef(MaterialInput);
