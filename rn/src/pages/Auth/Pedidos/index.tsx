import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
// import {usePedidos} from '../../../hooks/pedidos';
import ContainerTotal from '../../../components/ContainerTotal';
import LottieAnimation from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import ContainerPedidos, {
    IPedidoProps,
} from '../../../components/ContainerPedidos';
// import {Text} from 'react-native';

import {Container} from './styles';

export const Pedidos: React.FC = () => {
    const pedidos: IPedidoProps[] = [
        {
            id: '1',
            cli_nome: 'asdf',
            total_pedido: 150,
            data_pedido: new Date(),
        },
        {
            id: '2',
            cli_nome: 'asdfsdf',
            total_pedido: 152,
            data_pedido: new Date(),
        },
        {
            id: '3',
            cli_nome: 'asdfsdf',
            total_pedido: 153,
            data_pedido: new Date(),
        },
        {
            id: '4',
            cli_nome: 'asdfsdf',
            total_pedido: 153,
            data_pedido: new Date(),
        },
        {
            id: '5',
            cli_nome: 'asdfsdf',
            total_pedido: 153,
            data_pedido: new Date(),
        },
        {
            id: '6',
            cli_nome: 'asdfsdf',
            total_pedido: 153.55,
            data_pedido: new Date(),
        },
    ];
    const {navigate} = useNavigation();

    const totalDePedidos = React.useMemo(() => {
        return pedidos.reduce((prev, next) => {
            return prev + next.total_pedido;
        }, 0);
    }, [pedidos]);

    // React.useEffect(() => {
    //     firestore
    //         .collection('pedidos')
    //         .where('user_id', '==', user.user_id)
    //         .get()
    //         .then((el) => {
    //             console.log(el.docs[0]);
    //         });
    // }, []);

    const handlePedidoClick = React.useCallback(
        (id: string) => {
            navigate('EditPedidos', {
                pedido_id: id,
            });
        },
        [navigate],
    );

    return (
        <Container>
            {pedidos.length > 0 ? (
                <FlatList<IPedidoProps>
                    data={pedidos}
                    keyExtractor={({id}) => id}
                    ListHeaderComponent={() => (
                        <ContainerTotal total={totalDePedidos} />
                    )}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => handlePedidoClick(item.id)}>
                            <ContainerPedidos
                                cli_nome={item.cli_nome}
                                data_pedido={item.data_pedido}
                                id={item.id}
                                total_pedido={item.total_pedido}
                            />
                        </TouchableHighlight>
                    )}
                />
            ) : (
                <React.Fragment>
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
                </React.Fragment>
            )}
        </Container>
    );
};

export default Pedidos;
