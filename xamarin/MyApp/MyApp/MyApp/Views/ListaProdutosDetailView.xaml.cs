using System;
using Xamarin.Forms;

namespace MyApp.Views
{
    public partial class ListaProdutosDetailView : ContentPage
    {
        public ListaProdutosDetailView(string Name, string Estoque, string source)
        {
            InitializeComponent();

            MyItemNameShow.Text = Name;
            MyEstoque.Text = Estoque;

            MyImageCall.Source = new UriImageSource()
            {
                Uri = new Uri(source)
            };
        }
    }
}