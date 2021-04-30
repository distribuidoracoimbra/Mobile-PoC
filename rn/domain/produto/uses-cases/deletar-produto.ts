interface IDeletarProdutoRequest {
    pro_id: number;
}

export namespace IDeletarProduto {
    export type Request = IDeletarProdutoRequest;
    export type Result = Promise<void>;
    export type deletar = (data: Request) => Result;
}
