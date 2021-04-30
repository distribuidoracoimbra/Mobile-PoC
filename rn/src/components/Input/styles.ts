import styled, {css} from 'styled-components/native';

interface IContainerInputProps {
    state: 'error' | 'focus' | 'default';
}

const colorOfContainer = {
    error: css`
        border-bottom-color: #c53030;
    `,
    focus: css`
        border-bottom-color: #087cfe;
    `,
    default: css`
        border-bottom-color: #d4d4d4;
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
    color: grey;
`;
