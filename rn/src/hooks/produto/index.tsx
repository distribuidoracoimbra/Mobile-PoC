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
        from: 0,
        to: 150,
    });

    const [_loading, _setLoading] = React.useState<boolean>(false);
    const [_produtos, _setProdutos] = React.useState<IProduto.Produto_inf[]>(
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

    const atualizarPaginacao = React.useCallback(() => {
        _setPaginacao((oldValue) => ({
            from: oldValue.to,
            to: oldValue.to + 20,
        }));
    }, []);

    const reset = React.useCallback(() => {
        _setPaginacao({
            from: 0,
            to: 50,
        });
        _setProdutos([]);
    }, []);

    const _buscarProdutoPorId = React.useCallback(
        (pro_codigo: number) => {
            return _produtos.find((prod) => prod.pro_codigo === pro_codigo);
        },
        [_produtos],
    );

    React.useEffect(() => {
        _setLoading(true);
        Api.get(
            `https://dcoimbra-mobile.herokuapp.com/produtos?limit=${_paginacao.to}`,
        )
            .then((produtos) => {
                const {products} = produtos.data;

                _setProdutos((oldProducts) => {
                    if (!oldProducts || oldProducts.length === 0) {
                        return products;
                    }

                    const diff = Array.from<IProduto.Produto_inf>(
                        products,
                    ).filter(
                        (_prod) =>
                            !oldProducts.find(
                                (prod) => _prod.pro_codigo === prod.pro_codigo,
                            ),
                    );

                    if (!diff) {
                        return oldProducts;
                    }
                    return [...oldProducts, ...diff];
                });
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
                paginacao: _paginacao,
                produtos: _produtos,
                atualizarPaginacao,
                reset,
                buscarProdutoPorId: _buscarProdutoPorId,
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
