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
import {StatusBar} from 'react-native';
import Routes from './routes';
import AppProvider from './hooks';
import SystemColor from './preferences/theme';
import {useDarkMode} from 'react-native-dark-mode';

declare const global: {HermesInternal: null | {}};

const App = () => {
    const isDarkMode = useDarkMode();

    const defaulThemeOfDevice = React.useMemo(() => {
        if (isDarkMode) {
            return SystemColor.dark;
        }
        return SystemColor.light;
    }, [isDarkMode]);

    return (
        <AppProvider>
            <StatusBar
                barStyle={
                    defaulThemeOfDevice.title === 'light'
                        ? 'dark-content'
                        : 'light-content'
                }
                backgroundColor={defaulThemeOfDevice.primaryDark}
            />
            <Routes />
        </AppProvider>
    );
};
export default App;
