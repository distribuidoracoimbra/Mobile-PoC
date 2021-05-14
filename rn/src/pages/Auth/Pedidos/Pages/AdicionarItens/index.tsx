import React from 'react';
import {IProduto} from '../../../../../hooks/produto/IProduto';
import {FlatList, RefreshControl, ToastAndroid} from 'react-native';
import {RouteProp, useRoute} from '@react-navigation/native';
import {useProduto} from '../../../../../hooks/produto';
import {usePedidos} from '../../../../../hooks/pedidos';
import RowAdd from '../../components/RowAdd';

import {Container} from './styles';

type IRowAddNewProductProps = {
    readonly: {
        pedido_id: string;
    };
};

type IParamsPros = RouteProp<IRowAddNewProductProps, 'readonly'>;

export const AddNewItems: React.FC = () => {
    const [_refresing, _setRefresing] = React.useState<boolean>(false);
    const {produtos, atualizarPaginacao, reset} = useProduto();
    const {atualizarItensDoPedido} = usePedidos();
    const {params} = useRoute<IParamsPros>();

    const addProduct = React.useCallback(
        (pro_codigo: number) => {
            atualizarItensDoPedido({
                pedido_id: params.pedido_id,
                produto_id: pro_codigo,
                quantidade: 1,
            })
                .then(() =>
                    ToastAndroid.showWithGravity(
                        'Item adicionado com sucesso !',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    ),
                )
                .catch((err: any) => {
                    ToastAndroid.showWithGravity(
                        'Falha ao adicionar item no carrinho !',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    );

                    console.log(err);
                });
        },
        [atualizarItensDoPedido, params.pedido_id],
    );

    const removeProduct = React.useCallback(
        (pro_codigo: number) => {
            atualizarItensDoPedido({
                pedido_id: params.pedido_id,
                produto_id: pro_codigo,
                quantidade: 0,
            })
                .then(() =>
                    ToastAndroid.showWithGravity(
                        'Item removido com sucesso !',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    ),
                )
                .catch(() =>
                    ToastAndroid.showWithGravity(
                        'Falha ao remover o item no carrinho !',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    ),
                );
        },
        [atualizarItensDoPedido, params.pedido_id],
    );

    const handleRefresh = React.useCallback(() => {
        _setRefresing(true);
        reset();
        _setRefresing(false);
    }, [reset]);

    return (
        <Container>
            <FlatList<IProduto>
                data={produtos}
                keyExtractor={({pro_codigo}) => pro_codigo.toString()}
                renderItem={({item}) => (
                    <RowAdd
                        data={item}
                        handleAddProduct={({type, pro_codigo}) => {
                            if (type === 'add') {
                                addProduct(pro_codigo);
                            } else {
                                removeProduct(pro_codigo);
                            }
                        }}
                    />
                )}
                refreshControl={
                    <RefreshControl
                        refreshing={_refresing}
                        onRefresh={handleRefresh}
                    />
                }
                initialNumToRender={15}
                maxToRenderPerBatch={15}
                onEndReachedThreshold={0.1}
                onEndReached={atualizarPaginacao}
                style={{
                    width: '100%',
                }}
            />
        </Container>
    );
};
