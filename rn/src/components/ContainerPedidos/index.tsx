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

const ContainerPedidos: React.FC<IPedidoProps> = () => {
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
                    <TextSecundario>ksudnBokkOko125</TextSecundario>
                    <TextPrincipal>Churrascaria Paraná</TextPrincipal>
                </WrapperPedidoInfo>
                <WrapperTotalDoPedido>
                    <TextPrincipal>25000</TextPrincipal>
                </WrapperTotalDoPedido>
            </ConatinerInfoPedido>
            <WrapperDataPedido>
                <TextSecundario>Data do pedido: 05/05/2021</TextSecundario>
            </WrapperDataPedido>
        </Container>
    );
};

export default React.memo(ContainerPedidos);
