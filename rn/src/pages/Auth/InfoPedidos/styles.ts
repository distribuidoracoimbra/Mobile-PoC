import styled from 'styled-components/native';
import RowContainer from '../../../components/ContainerRowDefault';
import {TextSecundario, TextPrincipal} from '../../../components/Text';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const WrapperCliente = styled(RowContainer)`
    min-height: 68px;
    /* height: 25%; */
    padding: 8px 15px;

    align-items: center;
    justify-content: space-around;
`;

export const WrapperClienteIcon = styled.View`
    width: 15%;
    align-items: center;
    justify-content: center;
`;

export const WrapperTotalDoPedido = styled.View`
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ClienteWrapperIcon = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #21c25e;
    align-items: center;
    justify-content: center;
`;
type ITextTotalDoPedido = {
    tipo: 'positivo' | 'negativo';
};

export const TextTotalPedido = styled.Text<ITextTotalDoPedido>`
    font-size: 18px;
    color: ${(props) => (props.tipo === 'positivo' ? '#21c25e' : '#C22121')};
    font-weight: 900;
`;

export const LabelTotalPedido = styled(TextSecundario)`
    font-size: 11px;
    font-weight: 900;
    color: #343434;
`;

export const WrapperTitleCard = styled.View`
    width: 100%;
    min-height: 50px;
    /* height: 20%; */

    align-items: center;
    justify-content: center;
`;

export const TitleAddToCart = styled(TextPrincipal)`
    font-weight: 500;
    font-size: 18px;
    color: #434750;
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

export const WrapperPlusButton = styled.View`
    background-color: #161d30;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;
