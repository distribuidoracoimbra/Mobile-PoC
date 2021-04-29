using System;
using MyApp.Models;
using Xamarin.Forms;
using MyApp.ViewModels;
namespace MyApp.Views
{
    public partial class ListaProdutosView : ContentPage
    {
        public ListaProdutosView()
        {
            InitializeComponent();
            BindingContext = new ProdutosViewModel();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            var mydetails = e.Item as Produto;
            await Navigation.PushAsync(new ListaProdutosDetailView(mydetails.ProdutoID.ToString() , mydetails.Descricao, mydetails.Estoque.ToString(), mydetails.Fotos[0].ToString(), mydetails.Valor.ToString()));
        }
    }
}