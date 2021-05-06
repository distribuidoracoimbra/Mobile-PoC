using Firebase.Database;
using Firebase.Database.Query;
using MyApp.Models;
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
                          .Child(PedidoSelecionado.PedidoID.ToString)
                          .PutAsync(PedidoSelecionado);
        }

    }
}
