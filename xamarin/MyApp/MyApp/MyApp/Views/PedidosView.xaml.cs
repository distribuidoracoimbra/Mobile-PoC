using MyApp.Models;
using MyApp.ViewModels;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class PedidosView : ContentPage
    {
        private readonly PedidosViewModel _viewModel;
        public PedidosView()
        {
            InitializeComponent();
            _viewModel = new PedidosViewModel();
            BindingContext = _viewModel;
        }

        private void ListView_OnItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            //_viewModel.PedidoSelecionado = e.SelectedItem As Pedido;
        }
    }
}