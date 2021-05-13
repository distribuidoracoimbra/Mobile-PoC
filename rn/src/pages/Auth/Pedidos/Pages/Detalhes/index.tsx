import React from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';

import {usePedidos} from '../../../../../hooks/pedidos';
import {IProdutoWithPedido} from '../../../../../hooks/pedidos/IPedido';
import {IProdutoDoPedido} from '../../../../../../domain/produtos-de-um-pedidos';
import RowProduto from '../../components/Row';
import LottieAnimation from 'lottie-react-native';
import ContainerCliente from '../../components/RowCliente';

import {Container, WrapperTitleCard, TitleAddToCart} from './styles';

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

    const {
        buscarDetalhesDoPedido,
        loading,
        atualizarItensDoPedido,
    } = usePedidos();
    const {params} = useRoute<IParamsPros>();
    const {navigate} = useNavigation();

    const _handleAddProduct = React.useCallback(
        (pro_codigo: number) => {
            const oldProd = data.produtos.find(
                (prod) => prod.pro_codigo === pro_codigo,
            );

            if (!oldProd) {
                return;
            }

            atualizarItensDoPedido({
                pedido_id: params.pedido_id,
                produto_id: pro_codigo,
                quantidade: oldProd.quantidade + 1,
            });
        },
        [atualizarItensDoPedido, data.produtos, params.pedido_id],
    );

    const _handleDeleteProduct = React.useCallback(
        (pro_codigo: number) => {
            const oldProd = data.produtos.find(
                (prod) => prod.pro_codigo === pro_codigo,
            );

            if (!oldProd) {
                return;
            }

            atualizarItensDoPedido({
                pedido_id: params.pedido_id,
                produto_id: pro_codigo,
                quantidade: oldProd.quantidade + 1,
            });
        },
        [atualizarItensDoPedido, data.produtos, params.pedido_id],
    );

    const handleGotoAddNewProduct = React.useCallback(() => {
        navigate('AddNewItems', {
            pedido_id: params.pedido_id,
        });
    }, [navigate, params.pedido_id]);

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
                    <ContainerCliente pedido={data.pedido} />
                    <WrapperTitleCard onPress={handleGotoAddNewProduct}>
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
                                    dealWithChangesInQuantities={({
                                        type,
                                        pro_codigo,
                                    }) => {
                                        if (type === 'add') {
                                            return _handleAddProduct(
                                                pro_codigo,
                                            );
                                        }
                                        return _handleDeleteProduct(pro_codigo);
                                    }}
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
                            source={require('../../../Notificacoes/rocket-dog.json')}
                        />
                    )}
                </React.Fragment>
            )}
        </Container>
    );
};
