using MyApp.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class ClienteService
    {
        public async Task<ListaClientes> GetClientes()
        {
            HttpClient client = new HttpClient();
            string url = string.Format("https://dcoimbra-mobile.herokuapp.com/clientes?all=true");
            HttpResponseMessage response = await client.GetAsync(url);

            string json = await response.Content.ReadAsStringAsync();

            return JsonConvert.DeserializeObject<ListaClientes>(json);
        }
    }
}
