import styled from 'styled-components/native';
import RowContainer from '../../../../../components/ContainerRowDefault';

export const WrapperPlusButton = styled.TouchableHighlight`
    background-color: #161d30;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const WrapperProduct = styled(RowContainer)`
    /* min-height: 50px; */
    /* height: 25%; */
    padding: 8px 15px;
    /* flex: 1; */
    align-items: center;
    justify-content: space-between;
`;

export const WrapperProductImage = styled.View`
    min-width: 70px;
    min-height: 70px;
    /* flex: 1; */
    width: 20%;

    /* background-color: red; */
`;

export const ProductImage = styled.Image`
    flex: 1;
`;

export const WrapperProductInfo = styled.View`
    flex-direction: column;
    width: auto;
    max-width: 60%;
    align-items: flex-start;
    /* background-color: red; */
    flex: 1;
`;

export const WrapperProcutTotal = styled.View`
    width: 100%;
    align-items: center;
    justify-content: space-around;

    padding-right: 100px;

    flex-direction: row;
`;

export const WrapperProductPlus = styled.View`
    flex-direction: column;
    /* background-color: red; */
    align-items: center;
    justify-content: space-around;
    /* flex: 2; */
`;

export const TextButton = styled.Text`
    font-weight: 900;
    font-size: 11px;
    color: white;
`;

type ITextTotalDoPedido = {
    type: 'positivo' | 'negativo';
};

export const TextTotalPedido = styled.Text<ITextTotalDoPedido>`
    font-size: 18px;
    color: ${(props) => (props.type === 'positivo' ? '#21c25e' : '#C22121')};
    font-weight: 900;
`;
