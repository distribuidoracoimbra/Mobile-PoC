using System.Collections.Generic;

namespace MyApp.Models
{
    public class CliEndereco
    {
        public double cli_coord_latitude { get; set; }
        public double cli_coord_longitude { get; set; }
        public string cli_cep { get; set; }
    }

    public class Cliente
    {
        public int cli_codigo { get; set; }
        public string cli_nome { get; set; }
        public List<string> cli_fones { get; set; }
        public double cli_limite { get; set; }
        public CliEndereco cli_endereco { get; set; }
    }

    public class ListaClientes
    {
        public List<Cliente> clientes { get; set; }
        
    }



}