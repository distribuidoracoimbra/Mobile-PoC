import {IProduto} from './IProduto';
import {IProdutoRepository} from './IProdutoRepository';
export * from './uses-cases';

namespace IProduto {
    export type Produto_inf = IProduto;
    export type ProdutoRepository_int = IProdutoRepository;
}

export default IProduto;
