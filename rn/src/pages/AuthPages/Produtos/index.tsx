import React from 'react';
import {View} from 'react-native';

import {useAuth} from '../../../hooks/auth';
import {Button} from 'react-native-paper';
// import { Container } from './styles';

const Produtos: React.FC = () => {
    const {signOut} = useAuth();
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Button onPress={signOut}>Deslogar</Button>
        </View>
    );
};

export default Produtos;
