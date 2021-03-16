import styled from 'styled-components/native';
import LinearGradiente from 'react-native-linear-gradient';

export const Container = styled.TouchableOpacity`
    background-color: transparent;
    width: 100%;
    border-radius: 25px;
    overflow: hidden;
`;

export const ContainerGradiente = styled(LinearGradiente)`
    width: 100%;
    min-height: 50px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
`;
