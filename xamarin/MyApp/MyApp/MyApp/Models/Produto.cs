using System.Collections.Generic;

namespace MyApp.Models
{
    public class ListaProduto
    {
        public List<Produto> products { get; set; }
    }
    public class Produto
    {
        public int pro_codigo { get; set; }
        public string pro_descricao { get; set; }
        public double estoque { get; set; }
        public double valor { get; set; }
        public List<string> fotos { get; set; }
    }

}