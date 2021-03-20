import styled from 'styled-components/native';

export const Container = styled.TouchableHighlight`
    width: 60px;
    height: 60px;
    margin-top: -10px;
    position: relative;

    border-radius: 30px;
    overflow: hidden;
`;

export const ContainerOfButton = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    position: relative;
`;

export const ContainerOfText = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;
