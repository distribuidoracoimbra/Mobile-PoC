import styled from 'styled-components/native';
import RowContainer from '../../../../../components/ContainerRowDefault';
import {TextSecundario} from '../../../../../components/Text';

export const Container = styled(RowContainer)`
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

export const ClienteWrapperIcon = styled.View`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    border: 1px solid #21c25e;
    align-items: center;
    justify-content: center;
`;

export const WrapperTotalDoPedido = styled.View`
    flex-direction: column;
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
