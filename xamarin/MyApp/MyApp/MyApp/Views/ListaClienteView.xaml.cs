using System;
using MyApp.Models;
using Xamarin.Forms;
using Newtonsoft.Json;
using System.Collections.ObjectModel;
using System.Net.Http;

namespace MyApp.Views
{
    public partial class ListaClienteView : ContentPage
    {
        private const string Url = "https://dcoimbra-mobile.herokuapp.com/clientes?all=true";

        private readonly HttpClient _client = new HttpClient();
        public static ObservableCollection<Cliente> clientesLista { get; set; }

        public ListaClienteView()
        {
            InitializeComponent();
            carregaClientes();
        }

        private async void OnItemSelected(Object sender, ItemTappedEventArgs e)
        {
            var mydetails = e.Item as Cliente;
            await Navigation.PushAsync(new ListaClientesDetailView(mydetails.cli_codigo.ToString(),     
                                                                   mydetails.cli_nome ,
                                                                   mydetails.cli_endereco.cli_coord_latitude , 
                                                                   mydetails.cli_endereco.cli_coord_longitude,
                                                                   mydetails.cli_limite,
                                                                   mydetails.cli_fones.ToArray()

                                                                   ) );
        }

        async void carregaClientes()
        {
            string rescontent = await _client.GetStringAsync(Url);

            ListaClientes listaClientes = JsonConvert.DeserializeObject<ListaClientes>(rescontent);

            clientesLista = new ObservableCollection<Cliente>(listaClientes.clientes);

            ListViewClientes.ItemsSource = clientesLista;
        }
    }
}