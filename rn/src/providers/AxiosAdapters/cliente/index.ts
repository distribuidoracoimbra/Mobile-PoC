import Axios, {AxiosInstance} from 'axios';

import ProdutoNamespace from '../../../../domain/cliente';

/**
 * https://dcoimbra-mobile.herokuapp.com/clientes?all=true
 * https://dcoimbra-mobile.herokuapp.com/produtos?limit=20
 */

export class ClienteProviderAxiosAdapter
    implements ProdutoNamespace.ClienteRepository_intf {
    private baseURL: AxiosInstance;
    constructor() {
        this.baseURL = Axios.create({
            baseURL: 'https://dcoimbra-mobile.herokuapp.com/clientes',
            timeout: 3500,
        });
    }

    async buscarClientePorCodigo(
        cli_codigo: number,
    ): Promise<ICliente | undefined> {
        return undefined;
    }

    async buscarClientePorNome(
        cli_nome: string,
    ): Promise<ICliente | undefined> {
        return undefined;
    }

    async retornarListaDeClientesPromixos(
        data: IBuscarClientesProximosRequest,
    ): Promise<ICliente[]> {
        return [];
    }
}
