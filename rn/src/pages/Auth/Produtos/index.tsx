import React from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

export const Produtos: React.FC = ({children}) => {
    return (
        <Container>
            <Text>Produtos</Text>
            {children}
        </Container>
    );
};

export default Produtos;
