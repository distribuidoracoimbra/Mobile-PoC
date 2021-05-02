import {IPedido} from '../';

interface IPedidoRequest {
    cli_codigo: number;
}

export namespace ICreatePedido {
    export type Request = IPedidoRequest;
    export type Result = Promise<IPedido | undefined>;
    export type criarPedido = (pedido: Request) => Result;
}
