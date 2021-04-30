import React from 'react';
import {AuthProvider} from './auth';
import {ProdutoProvider} from './produto';

const AppProvider: React.FC = ({children}) => {
    return (
        <AuthProvider>
            <ProdutoProvider>{children}</ProdutoProvider>
        </AuthProvider>
    );
};

export default AppProvider;
