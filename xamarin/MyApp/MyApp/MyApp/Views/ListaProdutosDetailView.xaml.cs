using System;
using Xamarin.Forms;

namespace MyApp.Views
{
    public partial class ListaProdutosDetailView : ContentPage
    {
        public ListaProdutosDetailView(string pro_codigo, string pro_descricao, string Estoque, string source, string Valor)
        {
            InitializeComponent();

            lblpro_codigo.Text = pro_codigo;
            lblpro_descricao.Text = pro_descricao;
            lblvalor.Text = "R$ " + Valor + ",00";
            lblestoque.Text = "Disponivel: " + Estoque ;


            ImagemProduto.Source = new UriImageSource()
            {
                Uri = new Uri(source)
            };
        }
    }
}