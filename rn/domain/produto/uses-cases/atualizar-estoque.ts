import {IProduto} from '../IProduto';

interface IAtualizarProdutoRequest {
    pro_id: number;
    qtd: number;
}

export namespace IAtualizarEstoqueDoProduto {
    export type Request = IAtualizarProdutoRequest;
    export type Result = Promise<IProduto | undefined>;
    export type atualizarEstoque = (data: Request) => Result;
}
