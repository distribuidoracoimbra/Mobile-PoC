using MyApp.Models;
using MyApp.ViewModels;
using System;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class PedidosView : ContentPage
    {
        
        private readonly PedidosViewModel pedidoModel;
        public PedidosView()
        {
            InitializeComponent();
            pedidoModel = new PedidosViewModel();
            BindingContext = pedidoModel;
        }

        protected async override void OnAppearing()
        {
            base.OnAppearing();
            await pedidoModel.LoadPedidos();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            var mydetails = e.Item as Produto;
            await Navigation.PushAsync(new ListaProdutosDetailView(mydetails.ProdutoID.ToString(), mydetails.Descricao, mydetails.Estoque.ToString(), mydetails.Foto.ToString(), mydetails.Valor.ToString()));
        }

        private void ListView_OnItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            //_viewModel.PedidoSelecionado = e.SelectedItem As Pedido;
        }
    }
}

