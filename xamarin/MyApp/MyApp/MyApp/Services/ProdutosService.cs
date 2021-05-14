using Firebase.Database;
using MyApp.Models;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class ProdutosService
    {
        private readonly FirebaseClient firebase =
            new FirebaseClient("https://xamarinfirestoreapp-34f99-default-rtdb.firebaseio.com/");

        public ObservableCollection<Produto> GetProdutosObservable()
        {
            ObservableCollection<Produto> produtoData = firebase
                .Child("Produtos")
                .AsObservable<Produto>()
                .AsObservableCollection();
            return produtoData;
        }

        public async Task<List<Produto>> GetProdutos()
        {
            return (await firebase
                .Child("Produtos")
                .OnceAsync<Produto>()).Select(i => new Produto
                {
                    ProdutoID = i.Object.ProdutoID,
                    Descricao = i.Object.Descricao,
                    Estoque = i.Object.Estoque,
                    Valor = i.Object.Valor,
                    Foto = i.Object.Foto
                }).ToList();
        }
    }
}
