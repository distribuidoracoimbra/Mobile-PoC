using Newtonsoft.Json;
using System.Collections.Generic;

namespace MyApp.Models
{
    public class Produto
    {
        public int ProdutoID { get; set; }
        public string Descricao { get; set; }
        public double Estoque { get; set; }
        public double Valor { get; set; }
        public string Foto { get; set; }
    }

}