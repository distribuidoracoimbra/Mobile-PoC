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
        private ObservableCollection<Pedido> _listaPedidos;

        public ObservableCollection<Pedido> ListaPedidos
        {
            get => _listaPedidos;
            set
            {
                _listaPedidos = value;
                OnPropertyChanged();
            }
        }

        public Pedido PedidoSelecionado;
        public ICommand AceitarPedidoCmd { get; set; }

        public PedidosViewModel()
        {
            ListaPedidos = new ObservableCollection<Pedido>();
            AceitarPedidoCmd = new Command(async () => await AceitarPedidoAsync());
        }

        private async Task AceitarPedidoAsync()
        {
            
            PedidoSelecionado = new Pedido();
            PedidoSelecionado.PedidoID = 0;
            PedidoSelecionado.ProdutoID = 1890;
           // PedidoSelecionado.Data = DateTime.Now;
            PedidoSelecionado.Quantidade = 5;
            PedidoSelecionado.Valor = 71400 * 5;
            PedidoSelecionado.ClienteID = 76813;
            

            PedidosService pedidoService = new PedidosService();
            await pedidoService.AddPedido(PedidoSelecionado);
        }

        public async Task LoadPedidos()
        {
            PedidosService pedidoService = new PedidosService();
            List<Pedido> listaPedidos = await pedidoService.GetPedidos();

            ListaPedidos.Clear();

            foreach (Pedido item in listaPedidos)
            {
                ListaPedidos.Add(item);
            }
        }

    }
}
