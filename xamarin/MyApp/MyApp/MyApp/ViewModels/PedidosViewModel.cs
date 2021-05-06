using MyApp.Models;
using MyApp.Services;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;
using Xamarin.Forms;

namespace MyApp.ViewModels
{
    public class PedidosViewModel : BaseViewModel
    {
        private ObservableCollection<Pedido> _pedidos;

        public ObservableCollection<Pedido> Pedidos
        {
            get => _pedidos;
            set
            {
                _pedidos = value;
                OnPropertyChanged();
            }
        }

        public Pedido PedidoSelecionado;
        public ICommand AceitarPedidoCmd { get; set; }

        public PedidosViewModel()
        {
            Pedidos = new ObservableCollection<Pedido>();
            AceitarPedidoCmd = new Command(async () => await AceitarPedidoAsync());
        }

        private async Task AceitarPedidoAsync()
        {
            PedidosService pedidoService = new PedidosService();
            await pedidoService.AddPedido(PedidoSelecionado);
        }
    }
}
