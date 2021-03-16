import React from 'react';
import Profile from '../pages/AuthPages/Profile';
import Shopping from '../pages/AuthPages/Shopping';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import {createStackNavigator} from '@react-navigation/stack';

const Tab = createMaterialBottomTabNavigator();
// const PrivateStackNavigation = createStackNavigator();

const PrivateRoutes: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="profile" component={Profile} />
            <Tab.Screen name="shopping" component={Shopping} />
        </Tab.Navigator>
    );
};

// import { Container } from './styles';
export default PrivateRoutes;
