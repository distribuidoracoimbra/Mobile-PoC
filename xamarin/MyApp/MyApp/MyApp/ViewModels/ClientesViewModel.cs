using AsyncAwaitBestPractices.MVVM;
using MyApp.Models;
using MyApp.Services;
using System.Collections.ObjectModel;
using System.Threading.Tasks;
using MvvmHelpers;

namespace MyApp.ViewModels
{
    public class ClientesViewModel : BaseViewModel
    {
        public AsyncCommand RefreshCommand { get; }

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
            RefreshCommand = new AsyncCommand(LoadClientes);
        }
        public async Task LoadClientes()
        {
            IsBusy = true;
            ClienteService clienteService = new ClienteService();
            ListaClientes listaCliente = await clienteService.GetClientes();

            ListaClientes.Clear();

            foreach (Cliente item in listaCliente.Clientes)
            {
                ListaClientes.Add(item);
            }
            IsBusy = false;
        }

    }
}
