import React from 'react';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TextPrincipal} from '../../../../../components/Text';
import {IPedido} from '../../../../../../domain/pedido/IPedido';
import {
    Container,
    WrapperClienteIcon,
    ClienteWrapperIcon,
    WrapperTotalDoPedido,
    TextTotalPedido,
    LabelTotalPedido,
} from './styles';

type IRowClienteProp = {
    pedido: IPedido;
};

const RowCliente: React.FC<IRowClienteProp> = ({pedido}) => {
    const totalDeLimiteDisponivelDoCliente = React.useMemo(() => {
        const formater = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

        return formater.format(30000 - pedido.total);
    }, [pedido.total]);

    return (
        <Container>
            <WrapperClienteIcon>
                <ClienteWrapperIcon>
                    <FeatherIcons name="user" size={35} color="#21C25E" />
                </ClienteWrapperIcon>
            </WrapperClienteIcon>
            <TextPrincipal>
                {pedido.cliente?.cli_nome || 'Anônimus'}
            </TextPrincipal>
            <WrapperTotalDoPedido>
                <TextTotalPedido
                    tipo={pedido.total > 0 ? 'positivo' : 'negativo'}>
                    {totalDeLimiteDisponivelDoCliente}
                </TextTotalPedido>
                <LabelTotalPedido>Limite disponível</LabelTotalPedido>
            </WrapperTotalDoPedido>
        </Container>
    );
};

export default React.memo(RowCliente);
