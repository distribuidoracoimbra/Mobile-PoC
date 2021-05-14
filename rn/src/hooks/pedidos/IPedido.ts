import {ICreatePedido, IPedido} from '../../../domain/pedido';
import {
    IAdicionarProdutosEmUmPedido,
    IProdutoDoPedido,
} from '../../../domain/produtos-de-um-pedidos';

export type IProdutoWithPedido = {
    pedido: IPedido;
    produtos: IProdutoDoPedido[];
};

export interface PedidoContextData {
    loading: boolean;
    criarPedido: ICreatePedido.criarPedido;
    atualizarItensDoPedido: IAdicionarProdutosEmUmPedido.adicionarProdutosEmUmPedido;
    pedidos: IPedido[];
    buscarDetalhesDoPedido: (
        pedido_id: string,
    ) => Promise<IProdutoWithPedido | undefined>;
}
