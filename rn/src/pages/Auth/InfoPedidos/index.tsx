import React from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {TextPrincipal} from '../../../components/Text';
import {usePedidos} from '../../../hooks/pedidos';
import {IProdutoWithPedido} from '../../../hooks/pedidos/IPedido';
import {IProdutoDoPedido} from '../../../../domain/produtos-de-um-pedidos';
import RowProduto from './RowProduct';
import LottieAnimation from 'lottie-react-native';

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

type IParams = {
    readonly: {
        pedido_id: string;
    };
};

type IParamsPros = RouteProp<IParams, 'readonly'>;

export const InfoPedidos: React.FC = () => {
    const [data, setData] = React.useState<IProdutoWithPedido>(
        {} as IProdutoWithPedido,
    );

    const {buscarDetalhesDoPedido, loading} = usePedidos();
    const {params} = useRoute<IParamsPros>();

    React.useEffect(() => {
        buscarDetalhesDoPedido(String(params.pedido_id)).then((ped) => {
            if (!ped) {
                return;
            }
            setData(ped);
        });
    }, [params, buscarDetalhesDoPedido]);

    // const pedidos: IPedido = React.useMemo(() => {
    //     return {
    //         id: '1',
    //         user_id: 'sdfasdf',
    //         data_pedido: new Date(),
    //         pedido_codigo: 'asdfasd',
    //         produtos: [
    //             {
    //                 pro_codigo: 1,
    //                 quantidade: 5,
    //                 produto: {
    //                     estoque: 20,
    //                     fotos: [
    //                         'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/70/NQQ-4379-170/NQQ-4379-170_zoom1.jpg?ts=1602007318',
    //                     ],
    //                     pro_codigo: 1,
    //                     pro_descricao: 'Tênis adidas Breaknet',
    //                     valor: 350,
    //                 },
    //             },
    //         ],
    //         cliente: {
    //             cli_codigo: 1,
    //         },
    //     };
    // }, []);

    return (
        <Container>
            {loading || !data.pedido ? (
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <ActivityIndicator size={45} color="black" />
                </View>
            ) : (
                <React.Fragment>
                    <WrapperCliente>
                        <WrapperClienteIcon>
                            <ClienteWrapperIcon>
                                <FeatherIcons
                                    name="user"
                                    size={35}
                                    color="#21C25E"
                                />
                            </ClienteWrapperIcon>
                        </WrapperClienteIcon>
                        <TextPrincipal>
                            {data.pedido.cliente?.cli_nome || 'Anônimus'}
                        </TextPrincipal>
                        <WrapperTotalDoPedido>
                            <TextTotalPedido>
                                {30000 - data.pedido.total}
                            </TextTotalPedido>
                            <LabelTotalPedido>
                                Limite disponível
                            </LabelTotalPedido>
                        </WrapperTotalDoPedido>
                    </WrapperCliente>
                    <WrapperTitleCard>
                        <TitleAddToCart>
                            Adicione itens no pedido
                        </TitleAddToCart>
                    </WrapperTitleCard>
                    {data.produtos.length > 0 ? (
                        <FlatList<IProdutoDoPedido>
                            data={data.produtos}
                            keyExtractor={({pro_codigo}) =>
                                pro_codigo.toString()
                            }
                            renderItem={({item}) => <RowProduto data={item} />}
                        />
                    ) : (
                        <LottieAnimation
                            resizeMode="contain"
                            hardwareAccelerationAndroid
                            autoPlay
                            loop
                            style={{
                                display: 'flex',
                            }}
                            source={require('../Notificacoes/rocket-dog.json')}
                        />
                    )}
                </React.Fragment>
            )}
        </Container>
    );
};
