using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SplashView : ContentPage
    {
        Image splashImage;
        public SplashView()
        {

            InitializeComponent();

            NavigationPage.SetHasNavigationBar(this, false);

            var sub = new AbsoluteLayout();
            splashImage = new Image
            {
                Source = "homer.png",
                WidthRequest = 100,
                HeightRequest = 100
            };

            AbsoluteLayout.SetLayoutFlags( splashImage, AbsoluteLayoutFlags.PositionProportional);
            AbsoluteLayout.SetLayoutBounds(splashImage, new Rectangle(0.5, 0.5, AbsoluteLayout.AutoSize, AbsoluteLayout.AutoSize));

            sub.Children.Add(splashImage);
            this.BackgroundColor = Color.FromHex("#429de3");
            this.Content = sub;
        }

        protected override async void OnAppearing()
        {
            base.OnAppearing();

            await splashImage.ScaleTo(1, 100);
            for (int i = 0; i < 5; i++)
            {
                await splashImage.ScaleTo(0.8, 500, Easing.Linear);
                await splashImage.ScaleTo(1, 500, Easing.Linear);
            }
           
            Application.Current.MainPage = new NavigationPage(new LoginView());
        }

    }
}