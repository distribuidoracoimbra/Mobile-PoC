/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar, View, Text} from 'react-native';
import Routes from './routes';
import AppProvider from './hooks';

declare const global: {HermesInternal: null | {}};

const App = () => {
    return (
        // <View>
        //     <Text>banana</Text>
        // </View>
        <AppProvider>
            <StatusBar backgroundColor="#f0f0f0" barStyle="dark-content" />
            <Routes />
        </AppProvider>
    );
};
export default App;
