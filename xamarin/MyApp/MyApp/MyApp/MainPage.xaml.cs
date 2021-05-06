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
            MasterPageItem Pedido = new MasterPageItem() { Title = "Pedidos", Icon = "ic_local_shipping.png", TargetType = typeof(PedidosView) };
            MasterPageItem Produto = new MasterPageItem() { Title = "Produtos", Icon = "ic_restaurant.png", TargetType = typeof(ListaProdutosView) };
            MasterPageItem Cliente = new MasterPageItem() { Title = "Clientes", Icon = "ic_local_pizza.png", TargetType = typeof(ListaClienteView) };
            MasterPageItem Contato = new MasterPageItem() { Title = "Contatos", Icon = "ic_local_dining.png", TargetType = typeof(ContatosView) };
            MasterPageItem Comunicacao = new MasterPageItem() { Title = "Comunicação", Icon = "ic_local_dining.png", TargetType = typeof(Produtos) };

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
                Image = "http://www3.hilton.com/resources/media/hi/GSPSCHF/en_US/img/shared/full_page_image_gallery/main/HH_food_22_675x359_FitToBoxSmallDimension_Center.jpg",
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