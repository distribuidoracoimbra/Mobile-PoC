import React, {createContext, useCallback, useState, useContext} from 'react';
import {View} from 'react-native';

// import { Container } from './styles

interface IThemeProvider {
    theme: 'dark' | 'light';
}

const ThemeContext = createContext<IThemeProvider>({
    theme: 'light',
});

const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<IThemeProvider>();
};
