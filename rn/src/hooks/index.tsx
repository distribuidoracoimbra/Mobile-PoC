import React from 'react';
import {AuthProvider} from './auth';
import {Provider} from 'react-native-paper';
import {ThemeProvider} from 'styled-components';
import SystemColor from '../preferences/theme';
import {useDarkMode} from 'react-native-dark-mode';

const AppProvider: React.FC = ({children}) => {
    const isDarkMode = useDarkMode();

    const defaulThemeOfDevice = React.useMemo(() => {
        if (isDarkMode) {
            return SystemColor.dark;
        }
        return SystemColor.light;
    }, [isDarkMode]);

    return (
        <Provider>
            <ThemeProvider theme={defaulThemeOfDevice}>
                <AuthProvider>{children}</AuthProvider>
            </ThemeProvider>
        </Provider>
    );
};

export default AppProvider;
