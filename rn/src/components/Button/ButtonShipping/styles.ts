import styled from 'styled-components/native';
import LinearGradiente from 'react-native-linear-gradient';

export const Container = styled.TouchableHighlight`
    width: 60px;
    height: 60px;
    margin-top: -10px;
    position: relative;

    border-radius: 30px;
    overflow: hidden;
`;

export const ContainerOfButton = styled.View`
    flex: 1;
`;

export const Button = styled(LinearGradiente)`
    flex: 1;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const ContainerOpacity = styled.View`
    background-color: rgba(255, 255, 255, 0.1);

    position: absolute;
    z-index: 1;
    width: 20px;
    height: 100%;
`;
