using MyApp.Views;
using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class MainPage : MasterDetailPage
    {

        public List<MasterPageItem> menuList { get; set; }

        public MainPage()
        {
            InitializeComponent();
            NavigationPage.SetHasNavigationBar(this, false);

            menuList = new List<MasterPageItem>();

            //Fot Ios icons
            var page1 = new MasterPageItem() { Title = "Pedidos", Icon = "ic_local_shipping.png", TargetType = typeof(Produtos) };
            var page2 = new MasterPageItem() { Title = "Produtos", Icon = "ic_restaurant.png", TargetType = typeof(Produtos) };
            var page3 = new MasterPageItem() { Title = "Clientes", Icon = "ic_local_pizza.png", TargetType = typeof(ContatosView) };
            var page4 = new MasterPageItem() { Title = "Comunicação", Icon = "ic_local_dining.png", TargetType = typeof(Produtos) };

            // Adding menu items to menuList
            menuList.Add(page1);
            menuList.Add(page2);
            menuList.Add(page3);
            menuList.Add(page4);



            // Setting our list to be ItemSource for ListView in MainPage.xaml
            navigationDrawerList.ItemsSource = menuList;
            // Initial navigation, this can be used for our home page
            Detail = new NavigationPage((Page)Activator.CreateInstance(typeof(ContatosView)));
            this.BindingContext = new
            {
                Header = "",
                Image = "http://www3.hilton.com/resources/media/hi/GSPSCHF/en_US/img/shared/full_page_image_gallery/main/HH_food_22_675x359_FitToBoxSmallDimension_Center.jpg",
                //Footer = "         -------- Welcome To HotelPlaza --------           "
                Footer = "Bem vindo ao Go Beer!"
            };

        }

        private void OnMenuItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            
            var item = (MasterPageItem)e.SelectedItem;
            Type page = item.TargetType;
            Detail = new NavigationPage((Page)Activator.CreateInstance(page));
            IsPresented = false;
        }
        async private void Handle_ItemTapped(object sender, Xamarin.Forms.ItemTappedEventArgs e)
        {
            //When ever item is clicked then we are navigating to the details page
            var myselecteditem = e.Item as MasterPageItem;
            switch (myselecteditem.id)
            {
                case 1:
                    await Navigation.PushAsync(new ContatosView());
                    break;

            }
           ((ListView)sender).SelectedItem = null;
            IsPresented = false;
        }
    }

}