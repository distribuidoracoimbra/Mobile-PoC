import Axios, {AxiosInstance} from 'axios';

import ProdutoNamespace from '../../../../domain/produto';

/**
 * https://dcoimbra-mobile.herokuapp.com/clientes?all=true
 * https://dcoimbra-mobile.herokuapp.com/produtos?limit=20
 */

export class ProdutoProviderAxiosAdapter
    implements ProdutoNamespace.ProdutoRepository_int {
    private baseURL: AxiosInstance;
    constructor() {
        this.baseURL = Axios.create({
            baseURL: 'https://dcoimbra-mobile.herokuapp.com/produtos',
            timeout: 3500,
        });
    }

    async cadastrarProduto(
        produto: ProdutoNamespace.Produto_inf,
    ): Promise<ProdutoNamespace.Produto_inf> {
        return {} as ProdutoNamespace.Produto_inf;
    }
    async buscarProduto(
        produtoCdogio: number,
    ): Promise<ProdutoNamespace.Produto_inf | undefined> {
        return undefined;
    }
    async reservarQuantidade(
        produtoCdogio: number,
        quantidade: number,
    ): Promise<ProdutoNamespace.Produto_inf> {
        return {} as ProdutoNamespace.Produto_inf;
    }
}
