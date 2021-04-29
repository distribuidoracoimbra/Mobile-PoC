using Firebase.Database;
using MyApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class ProdutosService
    {
        FirebaseClient firebase =
            new FirebaseClient("https://xamarinfirestoreapp-34f99-default-rtdb.firebaseio.com/");

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
                    Fotos = i.Object.Fotos
                }).ToList();
        }

    }
}
