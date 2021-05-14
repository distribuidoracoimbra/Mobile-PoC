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
            var mydetails = e.Item as Pedido;
            await Navigation.PushAsync(new PedidoDetailView(mydetails.PedidoID, 
                                                            mydetails.ProdutoID, 
                                                            mydetails.ClienteID, 
                                                            mydetails.Quantidade, 
                                                            mydetails.Valor,
                                                            mydetails.Data
                                                            ));
        }

    }
}

