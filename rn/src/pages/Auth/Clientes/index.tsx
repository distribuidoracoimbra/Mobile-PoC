import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

export const Clientes: React.FC = ({children}) => {
    return (
        <Container>
            <Text>Clientes</Text>
            {children}
        </Container>
    );
};
