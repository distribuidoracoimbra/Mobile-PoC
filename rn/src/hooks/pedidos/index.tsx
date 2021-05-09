import React from 'react';
import {useAuth} from '../auth';
import FirebaseStorageProvider from '@react-native-firebase/firestore';
import {PedidoContextData} from './IPedido';
import {
    IAtualizaQuantidadeDeItensNoPedido,
    ICreatePedido,
    IPedido,
} from '../../../domain/pedido';

const PedidoContext = React.createContext<PedidoContextData>(
    {} as PedidoContextData,
);

const PedidoProvider: React.FC = ({children}) => {
    const [_pedidos, _setPedidos] = React.useState<IPedido[]>([]);
    const [_loading, _setLoading] = React.useState<boolean>(false);
    const {user} = useAuth();
    const FirebaseStorage = FirebaseStorageProvider();

    const criarPedido: ICreatePedido.criarPedido = React.useCallback(
        async (pedido: ICreatePedido.Request): ICreatePedido.Result => {
            const {cli_codigo} = pedido;

            await FirebaseStorage.collection<IPedido>('pedidos')
                .doc(user.user_id)
                .collection(String(cli_codigo))
                .add({
                    cli_codigo,
                    data_pedido: new Date(),
                    produtos: [],
                });

            return undefined;
        },
        [FirebaseStorage, user.user_id],
    );

    const atualizarQuantidadeDeProdutosEmUmPedido: IAtualizaQuantidadeDeItensNoPedido.atualizaQuantidadeDeItensNoPedido = React.useCallback(
        async (
            _pedido: IAtualizaQuantidadeDeItensNoPedido.Request,
        ): IAtualizaQuantidadeDeItensNoPedido.Result => {
            _setLoading(true);

            // const {nova_quantidade, pedido_codigo, pro_codigo} = pedido;

            // const teste = await FirebaseStorage.collectionGroup<IPedido>(
            //     'pedidos',
            // )
            //     .where('pedido_codigo', '==', pedido_codigo)
            //     .where('produto', 'array-contains', pro_codigo)
            //     .get();

            _setLoading(false);
            // const res = await pedidosRef.collection(pedido_codigo);
            return undefined;
        },
        [],
    );

    const _atualizarPedidos = React.useCallback((e: IPedido[] | undefined) => {
        console.log(`mudança nos pedidos - ${e?.length}`);
        console.log(e);
    }, []);

    React.useEffect(() => {
        if (user.user_id) {
            const doc = FirebaseStorage.collection<IPedido>('pedidos')
                .where('user_id', '==', user.user_id)
                .onSnapshot((document) => {
                    document.forEach((el) => {
                        const e = el.data();

                        _setPedidos((oldPedidos) => {
                            if (!oldPedidos || oldPedidos.length === 0) {
                                return [e];
                            }

                            const diff = oldPedidos.filter(
                                (_el) => _el.pedido_codigo !== e.pedido_codigo,
                            );

                            if (!diff) {
                                return oldPedidos;
                            }

                            return [...oldPedidos, ...diff];
                        });
                    });
                    // _atualizarPedidos(document.docs);
                });
            return () => doc();
        }
    }, [FirebaseStorage, user.user_id, _atualizarPedidos]);

    return (
        <PedidoContext.Provider
            value={{
                atualizarItensDoPedido: atualizarQuantidadeDeProdutosEmUmPedido,
                criarPedido,
                loading: _loading,
                pedidos: _pedidos,
            }}>
            {children}
        </PedidoContext.Provider>
    );
};

const usePedidos = (): PedidoContextData => {
    const context = React.useContext(PedidoContext);

    if (!context) {
        throw new Error('Provider de pedido não implementado');
    }

    return context;
};

export {PedidoProvider, usePedidos};
