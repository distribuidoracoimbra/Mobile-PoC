import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: white;
`;

export const HeaderContaienr = styled.View`
    width: 100%;
    min-height: 80px;
    padding: 5px 20px 0;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${(props) => props.theme.primaryDark};
`;

export const FixedHeaderContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => props.theme.text.secondColor};
`;

export const WrapperModalType = styled.View`
    flex-direction: row;
    justify-content: space-around;
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

export const WrapperProduct = styled.View`
    width: 100%;
    /* background-color: red; */
    height: 20%;
    min-height: 100px;
    padding: 5px 20px 10px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-color: rgba(0, 0, 0, 0.3);
`;

export const WrapperProductImage = styled.View`
    width: 35%;
`;

export const WrapperProductInfo = styled.View`
    flex: 1;
    /* background-color: green; */
    padding-left: 10px;
    justify-content: center;
`;

export const ProductName = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;

export const ProductDetails = styled.Text`
    font-size: 15px;
    font-weight: 400;
`;

export const ProductPrice = styled.Text`
    font-size: 14px;
    font-weight: 700;
`;
