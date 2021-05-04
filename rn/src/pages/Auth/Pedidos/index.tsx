import React from 'react';
import {usePedidos} from '../../../hooks/pedidos';
import {useAuth} from '../../../hooks/auth';
import {Text} from 'react-native';
import FireStore from '@react-native-firebase/firestore';

import {Container} from './styles';

export const Pedidos: React.FC = ({children}) => {
    const firestore = FireStore();
    const {user} = useAuth();

    React.useEffect(() => {
        firestore
            .collection('pedidos')
            .where('user_id', '==', user.user_id)
            .get()
            .then((el) => {
                console.log('Documentos filtrados');
                console.log(el.docs[0]);
            });
    }, []);

    const {pedidos} = usePedidos();
    return (
        <Container>
            <Text>Pedidos</Text>
            {children}
        </Container>
    );
};

export default Pedidos;
