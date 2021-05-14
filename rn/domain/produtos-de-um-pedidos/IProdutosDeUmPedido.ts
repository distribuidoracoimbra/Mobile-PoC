import {IProduto} from '../produto/IProduto';
import {IPedido} from '../pedido/IPedido';

export type IProdutoDoPedido = {
    pro_codigo: number;
    produto?: IProduto;
    quantidade: number;
    pedido_id: string;
    pedido?: IPedido;
};
