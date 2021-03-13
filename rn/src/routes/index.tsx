import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    animationEnabled: true,
                    gestureDirection: 'vertical-inverted',
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerTitle: '',
                        headerTransparent: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
