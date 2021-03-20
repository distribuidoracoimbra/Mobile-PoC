import React from 'react';
import ButtonShipping from '../components/Button/ButtonShipping';
import Shopping from '../pages/AuthPages/Notification';
import Pedidos from '../pages/AuthPages/Pedidos';
import Produtos from '../pages/AuthPages/Produtos';
import Clientes from '../pages/AuthPages/Clientes';
import Profile from '../pages/AuthPages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ShippingScreen: React.FC = () => {
    const HeaderLeft = React.useMemo(() => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <MaterialIcon name="search" size={24} color="white" />
                <MaterialIcon name="more-vert" size={24} color="white" />
            </View>
        );
    }, []);
    return (
        <Stack.Navigator
            screenOptions={{
                animationEnabled: true,
            }}>
            <Stack.Screen
                name="home"
                component={Pedidos}
                options={{
                    title: 'Seus pedidos',
                    headerRight: () => HeaderLeft,
                    headerStyle: {
                        backgroundColor: '#161D30',
                    },
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    animationEnabled: true,
                }}
            />
        </Stack.Navigator>
    );
};

const PrivateRoutes: React.FC = () => {
    return (
        <Tab.Navigator
            lazy={true}
            initialRouteName="profile"
            screenOptions={({route, navigation}) => ({
                tabBarIcon: () => {
                    if (route.name === 'pedidos') {
                        return (
                            <ButtonShipping
                                action={() => navigation.navigate('pedidos')}
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
            <Tab.Screen
                name="clientes"
                component={Clientes}
                options={{
                    title: 'Clientes',
                    tabBarIcon: ({color}) => (
                        <MaterialIcon name="contacts" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="produtos"
                component={Produtos}
                options={{
                    title: 'Produtos',
                    tabBarIcon: ({color}) => (
                        <MaterialIcon name="grid-on" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="pedidos"
                component={ShippingScreen}
                options={{
                    title: '',
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({color}) => (
                        <MaterialIcon name="person" color={color} size={24} />
                    ),
                }}
            />
            <Tab.Screen
                name="notifications"
                component={Shopping}
                options={{
                    title: 'Notificações',
                    tabBarIcon: ({color}) => (
                        <MaterialIcon
                            name="notifications"
                            color={color}
                            size={24}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default PrivateRoutes;
