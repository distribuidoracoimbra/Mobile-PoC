using System;
using System.Collections.Generic;
using System.Text;

namespace MyApp.Models
{
    public class Pedido
    {
        public int PedidoID { get; set; }
        public int ClienteID { get; set; }
        public int ProdutoID { get; set; }
        public decimal Valor { get; set; }
        public decimal Quantidade { get; set; }
        public DateTime Data { get; set; }

    }
}
