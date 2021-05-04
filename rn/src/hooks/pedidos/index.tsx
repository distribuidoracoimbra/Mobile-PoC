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
            pedido: IAtualizaQuantidadeDeItensNoPedido.Request,
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
        _setPedidos((oldPedidos) => {
            if (!oldPedidos || oldPedidos.length === 0) {
                if (!e || e.length === 0) {
                    return [];
                }

                return e;
            }

            if (!e || e.length === 0) {
                return oldPedidos;
            }

            const diff = e.filter(
                (_p) =>
                    !oldPedidos.find(
                        (p) => _p.pedido_codigo === p.pedido_codigo,
                    ),
            );

            return [...oldPedidos, ...diff];
        });
    }, []);

    React.useEffect(() => {
        const doc = FirebaseStorage.collection<IPedido[]>('pedidos')
            .doc(user.user_id)
            .onSnapshot((document) => {
                _atualizarPedidos(document.data());
            });

        return () => doc();
    }, [FirebaseStorage, user.user_id, _atualizarPedidos]);

    React.useEffect(() => {
        FirebaseStorage.collection<IPedido[]>('pedidos')
            .doc(user.user_id)
            .get()
            .then((pedidos) => {
                console.log(`Todos os pedidos - ${pedidos.data()}`);
            });
    }, [FirebaseStorage, user.user_id]);

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
