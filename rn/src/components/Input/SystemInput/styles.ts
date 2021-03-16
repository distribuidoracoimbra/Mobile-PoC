import styled, {css} from 'styled-components/native';

interface IContainerInputProps {
    state: 'error' | 'focus' | 'default';
}

const colorOfContainer = {
    error: css`
        border-bottom-color: ${(props) => props.theme.outline.error};
    `,
    focus: css`
        border-bottom-color: ${(props) => props.theme.destaqueColor};
    `,
    default: css`
        border-bottom-color: white;
    `,
};

export const Container = styled.View<IContainerInputProps>`
    width: 100%;
    border-bottom-width: 1px;
    ${(props) => colorOfContainer[props.state || 'default']}
    min-height: 50px;
    flex-direction: row;
    align-items: center;
`;

export const InputText = styled.TextInput`
    flex: 1;
    padding-left: 15px;
    color: ${(props) => props.theme.text.primaryColor};
`;
