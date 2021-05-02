import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

export const Pedidos: React.FC = ({children}) => {
    return (
        <Container>
            <Text>Pedidos</Text>
            {children}
        </Container>
    );
};

export default Pedidos;
