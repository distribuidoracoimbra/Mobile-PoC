import {IEndereco, ICliente} from './ICliente';
import {IClienteRepository} from './IClienteRepository';

namespace ICliente {
    export type Endereco_inf = IEndereco;
    export type Cliente_intf = ICliente;
    export type ClienteRepository_intf = IClienteRepository;
}

export default ICliente;
