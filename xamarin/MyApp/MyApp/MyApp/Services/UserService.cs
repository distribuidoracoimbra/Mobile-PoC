using Firebase.Database;
using Firebase.Database.Query;
using MyApp.Models;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Services
{
    public class UserService
    {
        FirebaseClient client;

        public UserService()
        {
            client = new FirebaseClient("https://xamarinfirestoreapp-34f99-default-rtdb.firebaseio.com/");
        }

        public object Username { get; private set; }

        public async Task<bool> IsUserExists(string name)
        {
            var user = (await client.Child("Users")
                .OnceAsync<User>())
                .Where(u => u.Object.Username == name)
                .FirstOrDefault();

            return (user != null);
        }

        public async Task<bool> RegisterUser(string name, string passwd)
        {
            if (await IsUserExists(name) == false)
            {
                await client.Child("Users")
                    .PostAsync(new User()
                    {
                        Username = name,
                        Password = passwd
                    });
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<bool> LoginUser(string name, string passwd)
        {
            var user = (await client.Child("Users")
                .OnceAsync<User>())
                .Where(u => u.Object.Username == name)
                .Where(u => u.Object.Password == passwd)
                .FirstOrDefault();

            return (user != null);
        }
    }
}
