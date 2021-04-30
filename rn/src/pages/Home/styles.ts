import styled, {css} from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: #fff;
`;

export const ContainerBottom = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    min-height: 50px;
    background-color: #e9fbff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 25px 0;
`;

type IButtonBackground = {
    background?: 'black';
};

const cssButton = {
    black: css`
        color: white;
        background-color: black;
    `,
    default: css`
        color: black;
        background-color: white;
    `,
};

export const ButtonOfContainer = styled.TouchableOpacity<IButtonBackground>`
    width: 130px;
    height: 60%;
    min-height: 45px;
    ${({background}) => cssButton[background || 'default']}
    margin-left: 25px;
    border-radius: 15px;
    border: 2px solid black;
    justify-content: center;
    align-items: center;
`;

export const TextOfButton = styled.Text<IButtonBackground>`
    color: ${(props) => (props.background ? 'white' : 'black')};
`;
