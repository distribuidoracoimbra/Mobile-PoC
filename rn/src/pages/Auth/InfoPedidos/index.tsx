import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';

// import { Container } from './styles';

export const InfoPedidos: React.FC = () => {
    const {params} = useRoute();

    console.log(params);
    return <View />;
};
