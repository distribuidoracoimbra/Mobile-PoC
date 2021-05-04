import React from 'react';
import {AuthProvider} from './auth';
import {ProdutoProvider} from './produto';
import {PedidoProvider} from './pedidos';

const AppProvider: React.FC = ({children}) => {
    return (
        <AuthProvider>
            <ProdutoProvider>
                <PedidoProvider>{children}</PedidoProvider>
            </ProdutoProvider>
        </AuthProvider>
    );
};

export default AppProvider;
