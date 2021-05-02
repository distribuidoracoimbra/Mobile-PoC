import {IPedido} from '../';

interface IAtualizaQuantidadeDeItensNoPedidoRequest {
    pedido_codigo: string | number;
    pro_codigo: number;
    nova_quantidade: number;
}

export namespace IAtualizaQuantidadeDeItensNoPedido {
    export type Request = IAtualizaQuantidadeDeItensNoPedidoRequest;
    export type Result = Promise<IPedido | undefined>;
    export type atualizaQuantidadeDeItensNoPedido = (pedido: Request) => Result;
}
