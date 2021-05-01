import React from 'react';
import {IInputProps, IInputActions} from './IInputProps';
import {Container, InputText} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SystemInput: React.ForwardRefRenderFunction<
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
        placeholder,
        ...rest
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

    const nameOfInputFormated = React.useMemo(() => {
        if (placeholder) {
            return placeholder.charAt(0).toUpperCase() + placeholder.slice(1);
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }, [name, placeholder]);

    return (
        <Container state={focus ? 'focus' : error ? 'error' : 'default'}>
            {icon && (
                <MaterialIcons
                    name={icon}
                    size={24}
                    color={focus ? '#087cfe' : error ? '#c53030' : 'grey'}
                />
            )}
            <InputText
                ref={inputElementRef}
                onFocus={() => {
                    setFocus(true);
                }}
                onSubmitEditing={onSubmitEditing}
                onChangeText={(e) => setValue(e)}
                onBlur={(e) => {
                    if (onBlur) {
                        onBlur(e);
                    }
                    setFocus(false);
                }}
                secureTextEntry={secureTextEntry}
                returnKeyType={returnKeyType}
                placeholder={nameOfInputFormated}
                keyboardAppearance={type}
                autoCorrect={false}
                {...rest}
            />
        </Container>
    );
};

export default React.forwardRef(SystemInput);
