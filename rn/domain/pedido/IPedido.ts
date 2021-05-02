type IProdutoDoPedido = {
    pro_codigo: number;
    quantidade: number;
};
export interface IPedido {
    pedido_codigo: string | number;
    produto: IProdutoDoPedido[];
    cli_codigo: number;
    data_pedido: Date;
}
