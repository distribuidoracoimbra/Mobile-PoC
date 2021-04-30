import {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface PedidosProps {
    children: ReactNode;
}

export const Pedidos = ({children}: PedidosProps) => {
    return (
        <Container>
            <Text>Pedidos</Text>
            {children}
        </Container>
    );
};

export default Pedidos;
