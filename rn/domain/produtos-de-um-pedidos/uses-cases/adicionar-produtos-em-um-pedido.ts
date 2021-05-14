interface IAdicionarProdutosEmUmPedidoRequest {
    pedido_id: string;
    produto_id: number;
    quantidade: number;
}

export namespace IAdicionarProdutosEmUmPedido {
    export type Request = IAdicionarProdutosEmUmPedidoRequest;
    export type Result = Promise<void>;
    export type adicionarProdutosEmUmPedido = (data: Request) => Result;
}
