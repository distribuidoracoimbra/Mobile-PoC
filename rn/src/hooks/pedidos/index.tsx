import React from 'react';
import {View} from 'react-native';
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

const PedidoProvider: React.FC = () => {
    const [pedidos, setPedidos] = React.useState<IPedido[]>();
    const {user} = useAuth();
    const FirebaseStorage = FirebaseStorageProvider();

    const pedidosRef = React.useMemo(() => {
        return FirebaseStorage.collection('pedidos').doc(user.user_id);
    }, [FirebaseStorage, user.user_id]);

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
            // const {nova_quantidade, pedido_codigo, pro_codigo} = pedido;
            // const res = await pedidosRef.collection(pedido_codigo);
        },
        [],
    );

    React.useEffect(() => {
        const doc = FirebaseStorage.collection('pedidos')
            .doc(user.user_id)
            .onSnapshot((document) => {
                console.log(`pedidos alterados data = ${document.data()}`);
            });

        return doc;
    }, [FirebaseStorage, user.user_id]);

    return <View />;
};

export default PedidoProvider;
