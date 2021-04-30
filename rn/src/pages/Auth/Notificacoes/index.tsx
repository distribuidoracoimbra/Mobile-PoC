import {ReactNode} from 'react';

import {Text} from 'react-native';

import {Container} from './styles';

interface NotificacoesProps {
    children: ReactNode;
}

export const Notificacoes = ({children}: NotificacoesProps) => {
    return (
        <Container>
            <Text>Notificacoes</Text>
            {children}
        </Container>
    );
};

export default Notificacoes;
