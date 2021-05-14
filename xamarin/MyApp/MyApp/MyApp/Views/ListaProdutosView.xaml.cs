using System;
using MyApp.Models;
using Xamarin.Forms;
using MyApp.ViewModels;
namespace MyApp.Views
{
    public partial class ListaProdutosView : ContentPage
    {

        private readonly ProdutosViewModel produtosVM;
        public ListaProdutosView()
        {
            InitializeComponent();
            produtosVM = new ProdutosViewModel();
            BindingContext = produtosVM;
        }
        protected async override void OnAppearing()
        {
            base.OnAppearing();
            await produtosVM.LoadProdutos();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            var mydetails = e.Item as Produto;
            await Navigation.PushAsync(new ListaProdutosDetailView(mydetails.ProdutoID.ToString() , mydetails.Descricao, mydetails.Estoque.ToString(), mydetails.Foto.ToString(), mydetails.Valor.ToString()));
        }
    }
}