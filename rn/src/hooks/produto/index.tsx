import React from 'react';
import {ProdutoContextData} from './IPedidos';
import {
    IAtualizarEstoqueDoProduto,
    IDeletarProduto,
    IProdutosPaginacao,
} from '../../../domain/produto';

const ProdutoContext = React.createContext<ProdutoContextData>(
    {} as ProdutoContextData,
);

const ProdutoProvider: React.FC = ({children}) => {
    const [
        _paginacao,
        _setPaginacao,
    ] = React.useState<IProdutosPaginacao.Request>();
    const [_loading, _setLoading] = React.useState<boolean>(false);

    const paginacao: IProdutosPaginacao.paginacao = React.useCallback(
        async (data: IProdutosPaginacao.Request): IProdutosPaginacao.Result => {
            const {from, to} = data;
            _setLoading(true);
            _setPaginacao({
                from,
                to,
            });
            _setLoading(false);
            return [];
        },
        [],
    );

    const atualizarEstoque: IAtualizarEstoqueDoProduto.atualizarEstoque = React.useCallback(
        async (
            _data: IAtualizarEstoqueDoProduto.Request,
        ): IAtualizarEstoqueDoProduto.Result => {
            // const {pro_id, qtd} = data;
            _setLoading(true);
            // blablabla do something
            _setLoading(false);

            return undefined;
        },
        [],
    );

    const deletarProduto: IDeletarProduto.deletar = React.useCallback(
        async (_data: IDeletarProduto.Request): IDeletarProduto.Result => {},
        [],
    );
    return (
        <ProdutoContext.Provider
            value={{
                atualizarEstoque,
                deletarProduto,
                loading: _loading,
                paginacao,
            }}>
            {children}
        </ProdutoContext.Provider>
    );
};

const useProduto = (): ProdutoContextData => {
    const context = React.useContext(ProdutoContext);

    if (!context) {
        throw new Error('Provider de produto não implementado !');
    }

    return context;
};

export {ProdutoProvider, useProduto};
