import {ICliente} from '../../../domain/cliente/ICliente';
import {IListagemGeral} from '../general-types/listagem/IListagem';

export interface ClienteContextData extends IListagemGeral {
    clientes: ICliente[];
    paginacao: () => void;
    buscarClientePeloId: (cliente_id: number) => ICliente | undefined;
    buscarClientePeloNome: (cliente_nome: string) => ICliente | undefined;
}
