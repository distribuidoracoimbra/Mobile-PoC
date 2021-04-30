import {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface ProdutosProps {
    children: ReactNode;
}

export const Produtos = ({children}: ProdutosProps) => {
    return (
        <Container>
            <Text>Produtos</Text>
            {children}
        </Container>
    );
};

export default Produtos;
