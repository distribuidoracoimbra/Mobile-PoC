using MyApp.Services;
using System;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace MyApp.Views
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class ContatosView : ContentPage
    {
        ContatoService contatoService = new ContatoService();
        public ContatosView()
        {
            InitializeComponent();
            
        }

        protected async override void OnAppearing()
        {
            await ExibeContatos();
        }

        private async void btnIncluir_Clicked(object sender, EventArgs e)
        {
            await contatoService.AddContato(Convert.ToInt32(txtId.Text), txtNome.Text, txtEmail.Text);

            txtId.Text = string.Empty;
            txtNome.Text = string.Empty;
            txtEmail.Text = string.Empty;

            await DisplayAlert("Success", "Contato incluido com sucesso", "Ok");

            await ExibeContatos();
        }

        public async Task ExibeContatos()
        {
            var contatos = await contatoService.GetContatos();
            listaContatos.ItemsSource = contatos;
        }

        private async void btnExibir_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtId.Text))
            {
                await DisplayAlert("Erro", "ID do contato inválido", "Ok");
            }
            else
            {
                try
                {
                    var contato = await contatoService.GetContato(Convert.ToInt32(txtId.Text));

                    if (contato != null)
                    {
                        txtId.Text = contato.ContadoID.ToString();
                        txtNome.Text = contato.Nome;
                        txtEmail.Text = contato.Email;
                    }
                    else
                    {
                        await DisplayAlert("Erro", "Não existe contato com esse ID", "Ok");
                    }
                }
                catch (Exception ex)
                {
                    await DisplayAlert("Erro", "Contato não encontrato : " + ex.Message, "Ok");
                }
            }
        }

        private async void btnAtualizar_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtId.Text))
            {
                await DisplayAlert("Erro", "ID do contato inválido", "Ok");
            }
            else
            {
                try
                {
                    await contatoService.UpdateContato(
                        Convert.ToInt32(txtId.Text), txtNome.Text, txtEmail.Text);

                    txtId.Text = string.Empty;
                    txtNome.Text = string.Empty;
                    txtEmail.Text = string.Empty;

                    await DisplayAlert("Sucesso", "Contato atualizado com sucesso", "Ok");

                    await ExibeContatos();
                }
                catch (Exception ex)
                {
                    await DisplayAlert("Erro", "Contato não atualizado : " + ex.Message, "Ok"); 
                }
            }
        }

        private async void btnDeletar_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(txtId.Text))
            {
                await DisplayAlert("Erro", "ID do contato inválido", "Ok");
            }
            else
            {
                try
                {
                    await contatoService.DeleteContato(Convert.ToInt32(txtId.Text));

                    txtId.Text = string.Empty;

                    await DisplayAlert("Sucesso", "Contato deletado com sucesso", "Ok");

                    await ExibeContatos();
                }
                catch (Exception ex)
                {
                    await DisplayAlert("Erro", "Contato não deletado : " + ex.Message, "Ok");
                }
            }
        }
    }
}