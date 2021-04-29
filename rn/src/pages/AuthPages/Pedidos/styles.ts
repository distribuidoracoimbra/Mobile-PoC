import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`;

export const ContainerHeader = styled.View`
    width: 100%;
    height: 10%;
    min-height: 80px;
    background-color: ${(props) => props.theme.primaryDark};
    align-items: center;
    padding: 0 20px 0;
`;

export const NameHeader = styled.Text`
    color: ${(props) => props.theme.text.primaryColor};
    font-weight: bold;
`;

interface IContainerPesquisaProps {
    focused: boolean;
}
export const ContainerPesquisaPedidos = styled.View<IContainerPesquisaProps>`
    width: 100%;
    background-color: white;
    margin-top: 5px;
    border: 1px solid
        ${(props) => (props.focused ? 'green' : 'rgba(0, 0, 0, 0.8)')};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 0 15px 0;
`;

export const InputPesquisaPedidos = styled.TextInput`
    flex: 1;
    height: 35px;
`;
