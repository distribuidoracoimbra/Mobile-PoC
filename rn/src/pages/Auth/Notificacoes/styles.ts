import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    background-color: white;
    padding: 0 15px;
`;

export const ContainerTitle = styled.View`
    width: 100%;
    margin: 15px 0;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 200;
    color: black;
`;

export const ContainerNotification = styled.View`
    width: 100%;

    min-height: 80px;
    border-color: rgba(0, 0, 0, 0.2);
    border-bottom-width: 1px;
    border-top-width: 1px;
    padding: 2px 15px 10px;
    position: relative;
    background-color: white;
`;

export const TextOfNotification = styled.Text`
    font-weight: 500;
    font-size: 15px;
    color: grey;
`;

export const ContainerDataPublicacao = styled.View`
    width: 100%;
    align-items: flex-end;
    padding-right: 10px;
`;

export const TextOfHour = styled.Text`
    font-size: 12px;
    font-weight: 200;
    color: grey;
`;

type IHandlyNotify = {
    type: 'READING' | 'REPORT';
};

export const ContainerOfMakeReading = styled.View<IHandlyNotify>`
    flex: 1;
    background-color: ${(props) =>
        props.type === 'READING' ? '#3e8d31' : '#8D3131'};
    justify-content: center;
    align-items: center;
`;

export const TextOfHandlingNotify = styled.Text`
    font-size: 18px;
    color: white;
`;
