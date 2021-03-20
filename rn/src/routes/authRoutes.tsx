import React from 'react';
import Profile from '../pages/AuthPages/Profile';
import ButtonShipping from '../components/Button/ButtonShipping';
import Shopping from '../pages/AuthPages/Shopping';
import Pedidos from '../pages/AuthPages/Pedidos';
import Clientes from '../pages/AuthPages/Clientes';
import Produtos from '../pages/AuthPages/Produtos';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
// const PrivateStackNavigation = createStackNavigator();

const PrivateRoutes: React.FC = () => {
    return (
        <Tab.Navigator
            lazy={true}
            screenOptions={({route, navigation}) => ({
                tabBarIcon: ({color, focused}) => {
                    if (route.name === 'shopping') {
                        return (
                            <ButtonShipping
                                action={() => navigation.navigate('shopping')}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#131418',
                },
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255,255,255,0.5)',
            }}>
            <Tab.Screen name="produtos" component={Produtos} />
            <Tab.Screen
                name="shopping"
                options={{
                    title: '',
                }}
                component={Shopping}
            />
            <Tab.Screen name="pedidos" component={Pedidos} />
        </Tab.Navigator>
    );
};

// import { Container } from './styles';
export default PrivateRoutes;

/**
 * activeColor="#fff"
            barStyle={{
                backgroundColor: '#131418',
                borderColor: ,
            }}
            inactiveColor="#92929c"
 *
 */
