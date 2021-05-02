import React from 'react';
import {ProdutoContextData} from './IProduto';
import IProduto, {
    IAtualizarEstoqueDoProduto,
    IDeletarProduto,
    IProdutosPaginacao,
} from '../../../domain/produto';
import Api from '../../utils/api/AxiosAdapter';

const ProdutoContext = React.createContext<ProdutoContextData>(
    {} as ProdutoContextData,
);

const ProdutoProvider: React.FC = ({children}) => {
    const [
        _paginacao,
        _setPaginacao,
    ] = React.useState<IProdutosPaginacao.Request>({
        from: 50,
        to: 100,
    });

    const [_loading, _setLoading] = React.useState<boolean>(false);
    const [_produtos, _setProdutos] = React.useState<IProduto.Produto_inf[]>(
        [],
    );

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

    React.useEffect(() => {
        _setLoading(true);
        Api.get<IProduto.Produto_inf[]>(
            `https://dcoimbra-mobile.herokuapp.com/produtos?limit=${_paginacao}`,
        )
            .then((produtos) => {
                _setProdutos(produtos.data);
                _setLoading(false);
            })
            .catch((e) => {
                console.error(e);
            });
    }, [_paginacao]);

    return (
        <ProdutoContext.Provider
            value={{
                atualizarEstoque,
                deletarProduto,
                loading: _loading,
                paginacao,
                produtos: _produtos,
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
