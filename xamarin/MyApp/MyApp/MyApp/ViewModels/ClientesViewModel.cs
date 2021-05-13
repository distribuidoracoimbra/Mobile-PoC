using MyApp.Models;
using MyApp.Services;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class ClientesViewModel : BaseViewModel
    {
        private ObservableCollection<Cliente> _ListaClientes;
        public ObservableCollection<Cliente> ListaClientes
        {
            get => _ListaClientes;
            set
            {
                _ListaClientes = value;
                OnPropertyChanged();
            }
        }

        public ClientesViewModel()
        {
            ListaClientes = new ObservableCollection<Cliente>();
        }
        public async Task LoadClientes()
        {
            ClienteService clienteService = new ClienteService();
            ListaClientes listaCliente = await clienteService.GetClientes();

            ListaClientes.Clear();

            foreach (Cliente item in listaCliente.Clientes)
            {
                ListaClientes.Add(item);
            }
        }

    }
}
