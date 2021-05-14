using System;
using MyApp.Models;
using Xamarin.Forms;
using MyApp.ViewModels;

namespace MyApp.Views
{
    public partial class ListaClienteView : ContentPage
    {
        private readonly ClientesViewModel clientesVM;
        public ListaClienteView()
        {
            InitializeComponent();
            clientesVM = new ClientesViewModel();
            BindingContext = clientesVM;
        }
        protected async override void OnAppearing()
        {
            base.OnAppearing();
            await clientesVM.LoadClientes();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            Cliente clienteDetail = e.Item as Cliente;
            await Navigation.PushAsync(new ListaClientesDetailView(clienteDetail.Codigo.ToString(),
                                                                   clienteDetail.Nome,
                                                                   clienteDetail.Endereco.Latitude, 
                                                                   clienteDetail.Endereco.Longitude,
                                                                   clienteDetail.Limite,
                                                                   clienteDetail.Telefones.ToArray()
                                                                   ));
        }
    }
}