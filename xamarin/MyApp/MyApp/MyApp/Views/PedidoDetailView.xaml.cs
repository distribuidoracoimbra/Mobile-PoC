using System;
using Xamarin.Forms;

namespace MyApp.Views
{
    public partial class PedidoDetailView : ContentPage
    {
        public PedidoDetailView(int pedidoId, int produtoID, int clienteID, double quantidade, double valor, DateTime data)
        {

            InitializeComponent();

            lblpedidoId.Text = "Pedido:"+ pedidoId.ToString();
            lblprodutoID.Text = "Produto:" + produtoID.ToString();
            lblclienteID.Text = "Cliente:" + clienteID.ToString();
            lblquantidade.Text = "Qtd:" + quantidade.ToString() + ",00";
            lblvalor.Text = "Valor: R$ " + valor.ToString()+ ",00";
            lbldata.Text = "Data do pedido:" + data.ToString();
        }
    }
}