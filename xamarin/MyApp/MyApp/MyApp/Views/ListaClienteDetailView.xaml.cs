using System;
using Xamarin.Forms;
using Xamarin.Essentials;
using Xamarin.Forms.GoogleMaps;

namespace MyApp.Views
{
    public partial class ListaClientesDetailView : ContentPage
    {
        public ListaClientesDetailView(string cli_codigo, string cli_nome, double latitude, double longitude, double cli_limite, string[] cli_fones)
        {                                                                 
            InitializeComponent();

            Pin pinCliente = new Pin()
            {
                Type = PinType.Place,
                Label = cli_nome,
                Position = new Position(-8.7891163d, -63.8458311),
                Tag = "id_" + cli_nome,
            };

            map.Pins.Add(pinCliente);
            map.MoveToRegion(MapSpan.FromCenterAndRadius(pinCliente.Position, Distance.FromMeters(1000)));

            lblcli_codigo.Text = cli_codigo;
            lblcli_nome.Text =  cli_nome;
            lblcli_limite.Text = "Disponível R$ " + cli_limite.ToString() + ",00";
             
            lblcli_fones.Text = string.Join(", ", cli_fones);
        }
    }
}