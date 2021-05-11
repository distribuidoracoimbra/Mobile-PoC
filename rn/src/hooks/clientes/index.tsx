import React from 'react';
import Api from '../../utils/api/AxiosAdapter';
import {ICliente} from '../../../domain/cliente/ICliente';
import {ClienteContextData} from './IClientes';

const ClienteContext = React.createContext<ClienteContextData>(
    {} as ClienteContextData,
);

const ClienteProvider: React.FC = ({children}) => {
    const [_clientes, _setCliente] = React.useState<ICliente[]>([]);
    const [_paginacao, _setPaginacao] = React.useState({
        from: 0,
        to: 150,
    });

    const _buscarClientePeloId = React.useCallback(
        (cli_id: number) => {
            return _clientes.find((_cli) => _cli.cli_codigo === cli_id);
        },
        [_clientes],
    );

    const _buscarClientePeloNome = React.useCallback(
        (cli_nome: string) => {
            return _clientes.find((_cli) => _cli.cli_nome === cli_nome);
        },
        [_clientes],
    );

    const paginacao = React.useCallback(() => {
        _setPaginacao((oldPag) => ({
            from: oldPag.to,
            to: oldPag.to + 50,
        }));
    }, []);

    const reset = React.useCallback(() => {
        _setPaginacao({
            from: 0,
            to: 50,
        });
    }, []);

    React.useEffect(() => {
        Api.get<ICliente[]>(
            `https://dcoimbra-mobile.herokuapp.com/clientes?from=${_paginacao.from}&to=${_paginacao.to}`,
        ).then((axiosData) => {
            const {data} = axiosData;
            _setCliente((oldCli) => {
                const diff = oldCli.filter((_cli) =>
                    data.find(
                        (_axiosCli) => _axiosCli.cli_codigo !== _cli.cli_codigo,
                    ),
                );

                return [...oldCli, ...diff];
            });
        });
    }, [_paginacao]);

    return (
        <ClienteContext.Provider
            value={{
                clientes: _clientes,
                buscarClientePeloId: _buscarClientePeloId,
                buscarClientePeloNome: _buscarClientePeloNome,
                paginacao,
                reset,
            }}>
            {children}
        </ClienteContext.Provider>
    );
};

const useClientes = (): ClienteContextData => {
    const context = React.useContext(ClienteContext);

    if (!context) {
        throw new Error('Provider de clientes não implementado !');
    }

    return context;
};

export {ClienteProvider, useClientes};
