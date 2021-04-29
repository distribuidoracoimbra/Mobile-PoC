using MyApp.Models;
using MyApp.Services;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class ProdutosViewModel : BaseViewModel
    {
        public ObservableCollection<Produto> ListaProdutos { get; set; }

        public ProdutosViewModel()
        {
            ListaProdutos = new ObservableCollection<Produto>();

            List<string> parts = new List<string>();
            parts.Add("https://image.shutterstock.com/image-photo/fresh-tasty-burger-isolated-on-260nw-705104968.jpg");
            ListaProdutos.Add(new Produto
            {
                ProdutoID = 1,
                Descricao = "Cheese Burger Completo",
                Estoque = 0,
                Valor = 100,
                Fotos = parts
            });
        }
    }   
}
