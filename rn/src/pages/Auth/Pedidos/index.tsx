import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import {usePedidos} from '../../../hooks/pedidos';
import ContainerTotal from '../../../components/ContainerTotal';
import LottieAnimation from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import ContainerPedidos from '../../../components/ContainerPedidos';
import {IPedido} from '../../../../domain/pedido';

import {Container} from './styles';

export const Pedidos: React.FC = () => {
    const {navigate} = useNavigation();
    const {pedidos} = usePedidos();

    const totalDePedidos = React.useMemo(() => {
        return pedidos.reduce((prev, next) => {
            return prev + next.total;
        }, 0);
    }, [pedidos]);

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
                <FlatList<IPedido>
                    data={pedidos}
                    keyExtractor={({id}) => id}
                    ListHeaderComponent={() => (
                        <ContainerTotal total={totalDePedidos} />
                    )}
                    renderItem={({item}) => (
                        <TouchableHighlight
                            onPress={() => handlePedidoClick(item.id)}>
                            <ContainerPedidos
                                cli_nome={item.cliente?.cli_nome || 'Anônimus'}
                                data_pedido={item.data_pedido}
                                id={item.id}
                                total_pedido={item.total}
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
