using System;
using MyApp.Models;
using Xamarin.Forms;
using Newtonsoft.Json;
using System.Collections.ObjectModel;
using System.Net.Http;

namespace MyApp.Views
{
    public partial class ListaProdutosView : ContentPage
    {
        private const string Url = "https://dcoimbra-mobile.herokuapp.com/produtos?all=true";

        private readonly HttpClient _client = new HttpClient();
        public static ObservableCollection<Produto> listaProdutos { get; set; }

        public ListaProdutosView()
        {
            InitializeComponent();
            carregaProdutos();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            var mydetails = e.Item as Produto;
            await Navigation.PushAsync(new ListaProdutosDetailView(mydetails.pro_codigo.ToString() , mydetails.pro_descricao, mydetails.estoque.ToString(), mydetails.fotos[0].ToString(), mydetails.valor.ToString()));
        }

        async void carregaProdutos()
        {
            string rescontent = await _client.GetStringAsync(Url);

            ListaProduto listaProduto = JsonConvert.DeserializeObject<ListaProduto>(rescontent);

            listaProdutos = new ObservableCollection<Produto>(listaProduto.products);

            foreach (Produto item in listaProdutos)
            {
                item.fotos.Clear();
                item.fotos.Add("https://media.istockphoto.com/photos/double-cheese-and-bacon-cheeseburger-picture-id511484502?k=6&m=511484502&s=612x612&w=0&h=2d8oTGH_E7KHkd4TIdftWIxjLsBP3CfdF44zy65FD0o=");
            }

            ListViewProdutos.ItemsSource = listaProdutos;
        }
    }
}