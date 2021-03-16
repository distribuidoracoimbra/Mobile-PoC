import React from 'react';
import {IInputProps, IInputActions} from '../IInputProps';
import {Container, InputText} from './styles';
import SystemColors from '../../../preferences/theme';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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
    },
    ref,
) => {
    // const [value, setValue] = React.useState<string>('');
    const [focus, setFocus] = React.useState<boolean>(false);
    console.log(type);
    const color = React.useMemo(() => {
        return SystemColors[type];
    }, [type]);
    // const inputElementRef = React.useRef<any>(null);

    // React.useImperativeHandle(ref, () => ({
    //     focus() {
    //         inputElementRef.current.focus();
    //     },
    //     value,
    // }));

    const nameOfInputFormated = React.useMemo(() => {
        if (placeholder) {
            return placeholder.charAt(0).toUpperCase() + placeholder.slice(1);
        }
        return name.charAt(0).toUpperCase() + name.slice(1);
    }, [name, placeholder]);

    return (
        <Container state={focus ? 'focus' : error ? 'error' : 'default'}>
            {icon && (
                <MaterialIcon
                    name={icon}
                    size={24}
                    color={
                        focus
                            ? color.destaqueColor
                            : error
                            ? color.outline.error
                            : color.text.secondColor
                    }
                />
            )}
            <InputText
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={nameOfInputFormated}
                placeholderTextColor={color.text.secondColor}
            />
        </Container>
    );
};

export default React.forwardRef(SystemInput);
