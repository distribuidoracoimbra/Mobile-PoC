using Firebase.Database;
using Firebase.Database.Query;
using MyApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class PedidosService
    {
        private readonly FirebaseClient firebase =
            new FirebaseClient("https://xamarinfirestoreapp-34f99-default-rtdb.firebaseio.com/");

        public async Task AddPedido(Pedido PedidoSelecionado)
        {
            await firebase.Child("Pedidos")
                          .PostAsync( new Pedido() { PedidoID = PedidoSelecionado.PedidoID,
                                                    Data = PedidoSelecionado.Data,
                                                    ProdutoID = PedidoSelecionado.ProdutoID,
                                                    Quantidade = PedidoSelecionado.Quantidade,
                                                    Valor = PedidoSelecionado.Valor,
                                                    ClienteID  = PedidoSelecionado.ClienteID
                          });
        }

        
        public async Task<List<Pedido>> GetPedidos()
        {
            return (await firebase
                .Child("Pedidos")
                .OnceAsync<Pedido>()).Select(i => new Pedido
                {
                    PedidoID = i.Object.PedidoID,
                    ClienteID = i.Object.ClienteID,
                    ProdutoID = i.Object.ProdutoID,
                    Valor = i.Object.Valor,
                    Quantidade = i.Object.Quantidade
                    //Data = i.Object.Data.Date
                }).ToList();
        }
        
    }
}
