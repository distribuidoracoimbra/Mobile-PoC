import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../pages/Home/Login';
import Signup from '../pages/Home/Signup';
import Home from '../pages/Home';
// import { Container } from './styles';

const StackDeRotasIniciais = createStackNavigator();

// import { Container } from './styles';
const RotasIniciais: React.FC = () => {
    return (
        <StackDeRotasIniciais.Navigator>
            <StackDeRotasIniciais.Screen
                options={{
                    headerShown: false,
                }}
                name="home"
                component={Home}
            />
            <StackDeRotasIniciais.Screen
                options={{
                    headerTintColor: '#000',
                    title: 'Entrar',
                    headerTitleAlign: 'left',
                }}
                name="login"
                component={Login}
            />
            <StackDeRotasIniciais.Screen
                options={{
                    headerTintColor: '#000',
                    title: 'Registrar',
                    headerTitleAlign: 'left',
                }}
                name="signup"
                component={Signup}
            />
        </StackDeRotasIniciais.Navigator>
    );
};
export default RotasIniciais;
