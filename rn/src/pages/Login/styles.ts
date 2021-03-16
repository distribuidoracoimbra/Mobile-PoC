import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 20px 0;
    background-color: ${(props) => props.theme.priamryColor};
`;

export const ContainerInput = styled.View`
    width: 100%;
    padding: 0 0 10px;
`;

export const ContainerText = styled.View`
    width: 100%;
    margin-bottom: 35px;
`;

export const MainText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: ${(props) => props.theme.text.primaryColor};
`;

export const SubText = styled.Text`
    font-size: 20px;
    font-weight: 400;
    color: ${(props) => props.theme.text.secondColor};
`;

export const ContainerButton = styled.TouchableOpacity`
    width: 100%;
    min-height: 50px;
    background-color: black;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    color: white;
    font-size: 15px;
    letter-spacing: 1px;
    font-weight: bold;
`;

export const ForgotPasswordLink = styled.TouchableOpacity`
    width: 100%;
    justify-content: center;
    align-items: center;

    margin-top: 18px;
`;

export const TextLink = styled.Text`
    color: ${(props) => props.theme.text.primaryColor};
`;
