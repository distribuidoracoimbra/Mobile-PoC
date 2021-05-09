import React from 'react';
import {FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TextPrincipal} from '../../../components/Text';
import {IPedido, IProdutosEmUmPedido} from '../../../../domain/pedido';

import {
    Container,
    WrapperCliente,
    WrapperClienteIcon,
    ClienteWrapperIcon,
    WrapperTotalDoPedido,
    TextTotalPedido,
    LabelTotalPedido,
    WrapperTitleCard,
    TitleAddToCart,
} from './styles';

export const InfoPedidos: React.FC = () => {
    const pedidos: IPedido = React.useMemo(() => {
        return {
            id: '1',
            user_id: 'sdfasdf',
            data_pedido: new Date(),
            pedido_codigo: 'asdfasd',
            produtos: [
                {
                    pro_codigo: 1,
                    quantidade: 5,
                    produto: {
                        estoque: 20,
                        fotos: [
                            'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/70/NQQ-4379-170/NQQ-4379-170_zoom1.jpg?ts=1602007318',
                        ],
                        pro_codigo: 1,
                        pro_descricao: 'Tênis adidas Breaknet',
                        valor: 350,
                    },
                },
            ],
            cliente: {
                cli_codigo: 1,
            },
        };
    }, []);

    const {params} = useRoute();

    console.log(params);
    return (
        <Container>
            <WrapperCliente>
                <WrapperClienteIcon>
                    <ClienteWrapperIcon>
                        <FeatherIcons name="user" size={35} color="#21C25E" />
                    </ClienteWrapperIcon>
                </WrapperClienteIcon>
                <TextPrincipal>Churrascaria Paraná</TextPrincipal>
                <WrapperTotalDoPedido>
                    <TextTotalPedido>250</TextTotalPedido>
                    <LabelTotalPedido>Limite disponível</LabelTotalPedido>
                </WrapperTotalDoPedido>
            </WrapperCliente>
            <WrapperTitleCard>
                <TitleAddToCart>Adicione itens no pedido</TitleAddToCart>
            </WrapperTitleCard>
            <FlatList />
        </Container>
    );
};
