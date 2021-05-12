import React from 'react';
import {IProduto} from '../../../hooks/produto/IProduto';
import {FlatList, RefreshControl, ToastAndroid} from 'react-native';
import {useProduto} from '../../../hooks/produto';
import {usePedidos} from '../../../hooks/pedidos';
import RowProduto from './RowProduct';

type IRowAddNewProductProps = {
    pedido_id: string;
};

const RowAddNewProduct: React.FC<IRowAddNewProductProps> = ({pedido_id}) => {
    const [_refresing, _setRefresing] = React.useState<boolean>(false);
    const {produtos, atualizarPaginacao, reset} = useProduto();
    const {atualizarItensDoPedido} = usePedidos();

    const addProduct = React.useCallback(
        (pro_codigo: number) => {
            atualizarItensDoPedido({
                pedido_id,
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
                .catch(() =>
                    ToastAndroid.showWithGravity(
                        'Falha ao adicionar item no carrinho !',
                        ToastAndroid.SHORT,
                        ToastAndroid.BOTTOM,
                    ),
                );
        },
        [atualizarItensDoPedido, pedido_id],
    );
    const removeProduct = React.useCallback(
        (pro_codigo: number) => {
            atualizarItensDoPedido({
                pedido_id,
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
        [atualizarItensDoPedido, pedido_id],
    );

    const handleRefresh = React.useCallback(() => {
        _setRefresing(true);
        reset();
        _setRefresing(false);
    }, [reset]);

    return (
        <FlatList<IProduto>
            data={produtos}
            keyExtractor={({pro_codigo}) => pro_codigo.toString()}
            renderItem={({item}) => (
                <RowProduto
                    data={{
                        pro_codigo: item.pro_codigo,
                        pro_price: item.valor,
                        pro_quantidade: 0,
                        pro_imagem: item.fotos[0],
                        pro_descricao: item.pro_descricao,
                    }}
                    addProduct={({pro_codigo, type}) => {
                        if (type === 'add') {
                            return addProduct(pro_codigo);
                        }
                        return removeProduct(pro_codigo);
                    }}
                    typeOfRow="news"
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
        />
    );
};

export default React.memo(RowAddNewProduct);
