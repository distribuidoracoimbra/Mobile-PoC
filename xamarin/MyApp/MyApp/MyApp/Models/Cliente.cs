using Newtonsoft.Json;
using System.Collections.Generic;

namespace MyApp.Models
{
    public class Endereco
    {
        [JsonProperty("cli_coord_latitude")]
        public double Latitude { get; set; }

        [JsonProperty("cli_coord_longitude")]
        public double Longitude { get; set; }

        [JsonProperty("cli_cep")]
        public string Cep { get; set; }
    }

    public class Cliente
    {
        [JsonProperty("cli_codigo")]
        public int Codigo { get; set; }

        [JsonProperty("cli_nome")]
        public string Nome { get; set; }

        [JsonProperty("cli_fones")]
        public List<string> Telefones { get; set; }

        [JsonProperty("cli_limite")]
        public double Limite { get; set; }

        [JsonProperty("cli_endereco")]
        public Endereco Endereco { get; set; }
    }

    public class ListaClientes
    {
        public List<Cliente> Clientes { get; set; }
        
    }



}