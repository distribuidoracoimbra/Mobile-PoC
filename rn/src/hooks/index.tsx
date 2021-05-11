import React from 'react';
import {AuthProvider} from './auth';
import {ProdutoProvider} from './produto';
import {PedidoProvider} from './pedidos';
import {ClienteProvider} from './clientes';

const AppProvider: React.FC = ({children}) => {
    return (
        <AuthProvider>
            <ProdutoProvider>
                <ClienteProvider>
                    <PedidoProvider>{children}</PedidoProvider>
                </ClienteProvider>
            </ProdutoProvider>
        </AuthProvider>
    );
};

export default AppProvider;
