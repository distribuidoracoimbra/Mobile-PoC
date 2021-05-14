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
        public double Valor { get; set; }
        public double Quantidade { get; set; }
        public DateTime Data { get; set; }

    }
}
