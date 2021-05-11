import {ICliente} from '../cliente/ICliente';

export interface IPedido {
    id: string;
    user_id: string;
    cli_codigo: number;
    cliente?: ICliente;
    data_pedido: Date;
}
