import React from 'react';
import {Text} from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

import {
    Container,
    ConatinerInfoPedido,
    TextSecundario,
    TextPrincipal,
    WrapperClienteDistancia,
    WrapperDataPedido,
    WrapperPedidoInfo,
    WrapperTotalDoPedido,
    WrapperPinDistancia,
} from './styles';

export interface IPedidoProps {
    id: string;
    cli_nome: string;
    total_pedido: number;
    data_pedido: Date;
}

const ContainerPedidos: React.FC<IPedidoProps> = ({
    cli_nome,
    data_pedido,
    id,
    total_pedido,
}) => {
    const dataFormatada = React.useMemo(() => {
        return new Intl.DateTimeFormat('pt-BR').format(data_pedido);
    }, [data_pedido]);

    const totalDosPedidosFormatados = React.useMemo(() => {
        const formater = new Intl.NumberFormat('pt-BR');

        return formater.format(total_pedido);
    }, [total_pedido]);

    return (
        <Container>
            <ConatinerInfoPedido>
                <WrapperClienteDistancia>
                    <WrapperPinDistancia>
                        <FeatherIcons name="map-pin" size={24} color="white" />
                    </WrapperPinDistancia>
                    <Text>115 KM</Text>
                </WrapperClienteDistancia>
                <WrapperPedidoInfo>
                    <TextSecundario>{id}</TextSecundario>
                    <TextPrincipal>{cli_nome}</TextPrincipal>
                </WrapperPedidoInfo>
                <WrapperTotalDoPedido>
                    <TextPrincipal>{totalDosPedidosFormatados}</TextPrincipal>
                </WrapperTotalDoPedido>
            </ConatinerInfoPedido>
            <WrapperDataPedido>
                <TextSecundario>Data do pedido: {dataFormatada}</TextSecundario>
            </WrapperDataPedido>
        </Container>
    );
};

export default React.memo(ContainerPedidos);
