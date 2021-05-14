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
import Routes from './routes';
import AppProvider from './hooks';
import 'intl/locale-data/jsonp/pt-BR';

declare const global: {HermesInternal: null | {}};

const App = () => {
    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    );
};
export default App;
