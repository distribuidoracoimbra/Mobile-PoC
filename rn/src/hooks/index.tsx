import React from 'react';
import {AuthProvider} from './auth';
import {ProdutoProvider} from './produto';
import {PedidoProvider} from './pedidos';
import {ClienteProvider} from './clientes';

const AppProvider: React.FC = ({children}) => {
    return (
        <AuthProvider>
            <ProdutoProvider>
                <PedidoProvider>
                    <ClienteProvider>{children}</ClienteProvider>
                </PedidoProvider>
            </ProdutoProvider>
        </AuthProvider>
    );
};

export default AppProvider;
