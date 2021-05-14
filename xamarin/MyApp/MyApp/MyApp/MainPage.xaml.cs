using MyApp.Views;
using MyApp.Models;
using System;
using System.Collections.Generic;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    [Obsolete]
    public partial class MainPage : MasterDetailPage
    {

        public List<MasterPageItem> MenuList { get; set; }

        public MainPage()
        {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);

            MenuList = new List<MasterPageItem>();

            //Fot Ios icons
            MasterPageItem Pedido      = new MasterPageItem() { Title = "Pedidos", Icon = "shopBag.png", TargetType = typeof(PedidosView) };
            MasterPageItem Produto     = new MasterPageItem() { Title = "Produtos", Icon = "products.png", TargetType = typeof(ListaProdutosView) };
            MasterPageItem Cliente     = new MasterPageItem() { Title = "Clientes", Icon = "client.png", TargetType = typeof(ListaClienteView) };
            MasterPageItem Contato     = new MasterPageItem() { Title = "Contatos", Icon = "contacts.png", TargetType = typeof(ContatosView) };
            MasterPageItem Comunicacao = new MasterPageItem() { Title = "Comunicação", Icon = "config.png", TargetType = typeof(ContatosView) };

            // Adding menu items to menuList
            MenuList.Add(Pedido);
            MenuList.Add(Produto);
            MenuList.Add(Cliente);
            MenuList.Add(Contato);
            MenuList.Add(Comunicacao);
            
            // Setting our list to be ItemSource for ListView in MainPage.xaml
            navigationDrawerList.ItemsSource = MenuList;
            // Initial navigation, this can be used for our home page
            Detail = new NavigationPage((Page)Activator.CreateInstance(typeof(ContatosView)));
            BindingContext = new
            {
                Header = "",
                Image = "homerfooter.png",
                Footer = "Bem vindo ao Go Beer!"
            };

        }

        private void OnMenuItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            MasterPageItem item = (MasterPageItem)e.SelectedItem;
            Type page = item.TargetType;
            Detail = new NavigationPage((Page)Activator.CreateInstance(page));
            IsPresented = false;
        }

    }

}