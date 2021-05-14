using Firebase.Database;
using Firebase.Database.Query;
using MyApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class ContatoService
    {
        private readonly FirebaseClient firebase =
            new FirebaseClient("https://xamarinfirestoreapp-34f99-default-rtdb.firebaseio.com/");

        public async Task AddContato(int contatoId, string nome, string email)
        {
            await firebase.Child("Contatos")
                .PostAsync(
                new Contato() { ContadoID = contatoId, Nome = nome, Email = email }
                );
        }

        public async Task<List<Contato>> GetContatos()
        {
            return (await firebase
                .Child("Contatos")
                .OnceAsync<Contato>()).Select(i => new Contato
                {
                    Nome = i.Object.Nome,
                    Email = i.Object.Email,
                    ContadoID = i.Object.ContadoID
                }).ToList();
        }

        public async Task<Contato> GetContato(int contatoId)
        {
            try
            {
                var contato = (await firebase
                    .Child("Contatos")
                    .OnceAsync<Contato>())
                    .Where(a => a.Object.ContadoID == contatoId).FirstOrDefault();

                return await firebase.Child("Contatos")
                    .Child(contato.Key).OnceSingleAsync<Contato>();
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task UpdateContato(int contatoId, string nome, string email)
        {
            try
            {
                var toUpdateContato = (await firebase
                    .Child("Contatos")
                    .OnceAsync<Contato>())
                    .Where(a => a.Object.ContadoID == contatoId).FirstOrDefault();

                await firebase.Child("Contatos")
                    .Child(toUpdateContato.Key)
                    .PutAsync(new Contato()
                    { ContadoID = contatoId, Nome = nome, Email = email });
            }
            catch (System.Exception)
            {
                throw;
            }
        }

        public async Task DeleteContato(int contatoId)
        {
            try
            {
                var toDeleteContato = (await firebase
                    .Child("Contatos")
                    .OnceAsync<Contato>())
                    .Where(a => a.Object.ContadoID == contatoId).FirstOrDefault();

                await firebase.Child("Contatos")
                    .Child(toDeleteContato.Key)
                    .DeleteAsync();
            }
            catch (System.Exception)
            {
                throw;
            }
        }
    }
}
