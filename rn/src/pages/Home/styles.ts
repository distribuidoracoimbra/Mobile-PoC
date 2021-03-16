import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${(props) => props.theme.priamryColor};
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const ContainerProfile = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

type ITypeOfText = {
    type: 'title' | 'normal';
};

export const TextOfUser = styled.Text<ITypeOfText>`
    color: ${(props) =>
        props.type === 'title'
            ? props.theme.text.primaryColor
            : props.theme.text.secondColor};
    font-size: ${(props) => (props.type === 'title' ? '17px' : '12px')};
    font-weight: ${(props) => (props.type === 'title' ? '700' : 'normal')};
    letter-spacing: 2px;
`;

export const ContainerBottom = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;

export const ContainerLogin = styled.View`
    background-color: ${(props) => props.theme.secondColor};
    min-height: 60px;
    display: flex;
    flex-direction: row;
    padding: 15px;
    justify-content: space-around;
`;
