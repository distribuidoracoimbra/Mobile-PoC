import {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface ClientesProps {
    children: ReactNode;
}

export const Clientes = ({children}: ClientesProps) => {
    return (
        <Container>
            <Text>Clientes</Text>
            {children}
        </Container>
    );
};
