import ProdutoNamespace, {
    IAtualizarEstoqueDoProduto,
    IDeletarProduto,
    IProdutosPaginacao,
} from '../../../domain/produto';
import {IListagemGeral} from '../general-types/listagem/IListagem';

export type IProduto = ProdutoNamespace.Produto_inf;

export interface ProdutoContextData extends IListagemGeral {
    produtos: ProdutoNamespace.Produto_inf[];
    atualizarEstoque: IAtualizarEstoqueDoProduto.atualizarEstoque;
    loading: boolean;
    deletarProduto: IDeletarProduto.deletar;
    paginacao: IProdutosPaginacao.Request;
    atualizarPaginacao: () => void;
}
