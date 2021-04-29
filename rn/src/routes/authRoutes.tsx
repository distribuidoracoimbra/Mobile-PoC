import React from 'react';
import ButtonShipping from '../components/Button/ButtonShipping';
import Notifications from '../pages/AuthPages/Notification';
import Pedidos from '../pages/AuthPages/Pedidos';
import Produtos from '../pages/AuthPages/Produtos';
import Clientes from '../pages/AuthPages/Clientes';
import Profile from '../pages/AuthPages/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';
import SystemColor from '../preferences/theme';
import {useDarkMode} from 'react-native-dark-mode';

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
    const isDark = useDarkMode();
    const defaultTheme = React.useMemo(() => {
        return isDark ? SystemColor.dark : SystemColor.light;
    }, [isDark]);

    return (
        <Tab.Navigator
            initialRouteName="pedidos"
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
                    backgroundColor: defaultTheme.primaryDark,
                },
                activeTintColor: defaultTheme.text.primaryColor,
                inactiveTintColor: defaultTheme.text.secondColor,
                keyboardHidesTabBar: true,
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
                component={Pedidos}
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
                component={Notifications}
                options={{
                    title: 'Notificações',
                    tabBarIcon: ({color}) => (
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                                height: '100%',
                            }}>
                            <View
                                style={{
                                    width: 12,
                                    height: 12,
                                    borderRadius: 10,
                                    backgroundColor: 'red',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    top: 5,
                                    right: 0,
                                    elevation: 2,
                                }}
                            />
                            <MaterialIcon
                                name="notifications"
                                color={color}
                                size={24}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default PrivateRoutes;
