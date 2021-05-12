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
import RowAddProduct from './RowAddNewProduct';

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

    const [addNewProduct, setAddNewProduct] = React.useState<boolean>(false);

    const {
        buscarDetalhesDoPedido,
        loading,
        atualizarItensDoPedido,
    } = usePedidos();
    const {params} = useRoute<IParamsPros>();

    const totalDeLimiteDisponivelDoCliente = React.useMemo(
        () => (data.pedido ? 30000 - data.pedido.total : 0),
        [data.pedido],
    );
    const _addProduct = React.useCallback(
        (data: {pro_codigo: number; type: 'add' | 'remove'}) => {
            const {pro_codigo, type} = data;
            // atualizarItensDoPedido()
        },
        [],
    );

    React.useEffect(() => {
        buscarDetalhesDoPedido(String(params.pedido_id)).then((ped) => {
            if (!ped) {
                return;
            }
            setData(ped);
        });
    }, [params, buscarDetalhesDoPedido]);

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
                            <TextTotalPedido
                                tipo={
                                    totalDeLimiteDisponivelDoCliente > 0
                                        ? 'positivo'
                                        : 'negativo'
                                }>
                                {totalDeLimiteDisponivelDoCliente}
                            </TextTotalPedido>
                            <LabelTotalPedido>
                                Limite disponível
                            </LabelTotalPedido>
                        </WrapperTotalDoPedido>
                    </WrapperCliente>
                    <WrapperTitleCard onPress={() => setAddNewProduct(true)}>
                        <TitleAddToCart>
                            Adicione itens no pedido
                        </TitleAddToCart>
                    </WrapperTitleCard>
                    {addNewProduct ? (
                        <RowAddProduct pedido_id={params.pedido_id} />
                    ) : data.produtos.length > 0 ? (
                        <FlatList<IProdutoDoPedido>
                            data={data.produtos}
                            keyExtractor={({pro_codigo}) =>
                                pro_codigo.toString()
                            }
                            renderItem={({item}) => (
                                <RowProduto
                                    data={{
                                        pro_codigo: item.pro_codigo,
                                        pro_price: item.produto!.valor,
                                        pro_quantidade: item.quantidade,
                                        pro_imagem: item.produto!.fotos[0],
                                        pro_descricao: item.produto!
                                            .pro_descricao,
                                    }}
                                    addProduct={_addProduct}
                                    typeOfRow="increment"
                                />
                            )}
                            initialNumToRender={15}
                            maxToRenderPerBatch={15}
                            onEndReachedThreshold={0.1}
                        />
                    ) : (
                        <LottieAnimation
                            resizeMode="contain"
                            hardwareAccelerationAndroid
                            autoPlay
                            loop
                            style={{
                                display: 'flex',
                                zIndex: 0,
                            }}
                            source={require('../Notificacoes/rocket-dog.json')}
                        />
                    )}
                </React.Fragment>
            )}
        </Container>
    );
};
