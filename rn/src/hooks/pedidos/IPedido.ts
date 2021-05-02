import {
    IAtualizaQuantidadeDeItensNoPedido,
    ICreatePedido,
    IPedido,
} from '../../../domain/pedido';

export interface PedidoContextData {
    loading: boolean;
    criarPedido: ICreatePedido.criarPedido;
    atualizarItensDoPedido: IAtualizaQuantidadeDeItensNoPedido.atualizaQuantidadeDeItensNoPedido;
    pedidos: IPedido[];
}
