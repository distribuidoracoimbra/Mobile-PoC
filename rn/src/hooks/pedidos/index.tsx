import React from 'react';
import {useAuth} from '../auth';
import FirebaseStorageProvider from '@react-native-firebase/firestore';
import {PedidoContextData, IProdutoWithPedido} from './IPedido';
import uuid from 'react-native-uuid';
import {useClientes} from '../clientes';
import {useProduto} from '../produto';

import {ICreatePedido, IPedido} from '../../../domain/pedido';
import {
    IAdicionarProdutosEmUmPedido,
    IProdutoDoPedido,
} from '../../../domain/produtos-de-um-pedidos';

const PedidoContext = React.createContext<PedidoContextData>(
    {} as PedidoContextData,
);

const PedidoProvider: React.FC = ({children}) => {
    const [_pedidos, _setPedidos] = React.useState<IPedido[]>([]);
    const [_loading, _setLoading] = React.useState<boolean>(false);
    const {user} = useAuth();
    const {buscarClientePeloId} = useClientes();
    const {buscarProdutoPorId} = useProduto();
    const FirebaseStorage = FirebaseStorageProvider();

    const produtosDeUmPedidosRef = React.useMemo(
        () =>
            FirebaseStorage.collection<IProdutoDoPedido>(
                'produtos-de-um-pedidos',
            ),
        [FirebaseStorage],
    );

    const pedidosRef = React.useMemo(
        () => FirebaseStorage.collection<IPedido>('pedidos'),
        [FirebaseStorage],
    );

    const criarPedido: ICreatePedido.criarPedido = React.useCallback(
        async (pedido: ICreatePedido.Request): ICreatePedido.Result => {
            const {cli_codigo} = pedido;

            await pedidosRef.add({
                cli_codigo,
                data_pedido: new Date(),
                id: String(uuid.v4()),
                user_id: user.user_id,
                total: 0,
            });

            return undefined;
        },
        [pedidosRef, user.user_id],
    );

    const adicionarProdutosAUmPedido: IAdicionarProdutosEmUmPedido.adicionarProdutosEmUmPedido = React.useCallback(
        async (
            pedido: IAdicionarProdutosEmUmPedido.Request,
        ): IAdicionarProdutosEmUmPedido.Result => {
            _setLoading(true);
            const {pedido_id, produto_id, quantidade} = pedido;

            produtosDeUmPedidosRef
                .where('pedido_id', '==', pedido_id)
                .get()
                .then((pedidoRef) => {
                    if (pedidoRef.empty) {
                        produtosDeUmPedidosRef.add({
                            pedido_id,
                            pro_codigo: produto_id,
                            quantidade,
                        });
                    } else {
                        pedidoRef.docs.forEach((doc) =>
                            doc.ref.update({
                                quantidade: quantidade,
                            }),
                        );
                    }
                });

            _setLoading(false);
            return undefined;
        },
        [produtosDeUmPedidosRef],
    );

    const _atualizarPedidos = React.useCallback((e: IPedido[] | undefined) => {
        console.log(`mudança nos pedidos - ${e?.length}`);
        console.log(e);
    }, []);

    const _buscarDetalhesDoPedido = React.useCallback(
        async (pedido_id: string): Promise<IProdutoWithPedido | undefined> => {
            _setLoading(true);
            const pedido = _pedidos.find((ped) => ped.id === pedido_id);

            if (!pedido) {
                throw new Error('asdf');
            }

            const produtos = (
                await produtosDeUmPedidosRef
                    .where('pedido_id', '==', pedido_id)
                    .get()
            ).docs
                .map((pro) => pro.data())
                .map((prod) => ({
                    ...prod,
                    produto: buscarProdutoPorId(prod.pro_codigo),
                }));

            _setLoading(false);

            return {
                pedido: {
                    ...pedido,
                    cliente: buscarClientePeloId(pedido.cli_codigo),
                },
                produtos,
            };
        },
        [
            _pedidos,
            produtosDeUmPedidosRef,
            buscarClientePeloId,
            buscarProdutoPorId,
        ],
    );

    React.useEffect(() => {
        if (user.user_id) {
            const doc = pedidosRef
                .where('user_id', '==', user.user_id)
                .onSnapshot((document) => {
                    document.forEach((el) => {
                        const e = el.data();

                        _setPedidos((oldPedidos) => {
                            if (!oldPedidos || oldPedidos.length === 0) {
                                return [
                                    {
                                        ...e,
                                        cliente: buscarClientePeloId(
                                            e.cli_codigo,
                                        ),
                                    },
                                ];
                            }

                            const diff = oldPedidos.filter(
                                (_el) => _el.id !== e.id,
                            );

                            if (!diff) {
                                return oldPedidos;
                            }

                            const newArrayOfPedido = [
                                ...oldPedidos,
                                ...diff,
                            ].map((ped) => ({
                                ...ped,
                                cliente: buscarClientePeloId(ped.cli_codigo),
                            }));

                            return newArrayOfPedido;
                        });
                    });
                    // _atualizarPedidos(document.docs);
                });
            return () => doc();
        }
    }, [
        FirebaseStorage,
        user.user_id,
        _atualizarPedidos,
        pedidosRef,
        buscarClientePeloId,
    ]);

    return (
        <PedidoContext.Provider
            value={{
                atualizarItensDoPedido: adicionarProdutosAUmPedido,
                criarPedido,
                buscarDetalhesDoPedido: _buscarDetalhesDoPedido,
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
