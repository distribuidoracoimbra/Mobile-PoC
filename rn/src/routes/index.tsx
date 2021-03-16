import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PrivateRoutes from './authRoutes';
import {useAuth} from '../hooks/auth';
import {ActivityIndicator, View} from 'react-native';

const Stack = createStackNavigator();

const HomeRoutes = () => {
    return (
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
    );
};

const LoadingScreen = () => (
    <View
        style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
        <ActivityIndicator color="black" size={24} />
    </View>
);

const HomeRoutesMemo = React.memo(HomeRoutes);

const Routes: React.FC = () => {
    const {user, loading} = useAuth();

    if (loading) {
        return <LoadingScreen />;
    }
    return (
        <NavigationContainer>
            {user ? <PrivateRoutes /> : <HomeRoutesMemo />}
        </NavigationContainer>
    );
};

export default Routes;
