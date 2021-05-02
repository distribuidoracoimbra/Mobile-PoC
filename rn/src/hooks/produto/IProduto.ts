import ProdutoNamespace, {
    IAtualizarEstoqueDoProduto,
    IDeletarProduto,
    IProdutosPaginacao,
} from '../../../domain/produto';

export type IProduto = ProdutoNamespace.Produto_inf;

export interface ProdutoContextData {
    produtos: ProdutoNamespace.Produto_inf[];
    atualizarEstoque: IAtualizarEstoqueDoProduto.atualizarEstoque;
    loading: boolean;
    deletarProduto: IDeletarProduto.deletar;
    paginacao: IProdutosPaginacao.paginacao;
}
