import {IProduto} from '../IProduto';

interface IProdutosPaginacao {
    from: number;
    to: number;
}

export namespace IProdutosPaginacao {
    export type Request = IProdutosPaginacao;
    export type Result = Promise<IProduto[]>;
    export type paginacao = (data: Request) => Result;
}
