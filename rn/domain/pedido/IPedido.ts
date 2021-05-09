import {IProduto} from '../produto/IProduto';
import {ICliente} from '../cliente/ICliente';

type IProdutoDoPedido = {
    pro_codigo: number;
    quantidade: number;
    produto?: IProduto;
};

export type IProdutosEmUmPedido = IProdutoDoPedido[];

type IClienteDoPedido = {
    cli_codigo: number;
    cliente?: ICliente;
};

export interface IPedido {
    id: string;
    user_id: string;
    pedido_codigo: string | number;
    produtos: IProdutosEmUmPedido;
    cliente: IClienteDoPedido;
    data_pedido: Date;
}
