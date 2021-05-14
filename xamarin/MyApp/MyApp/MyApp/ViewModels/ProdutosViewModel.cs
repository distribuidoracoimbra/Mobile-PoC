using AsyncAwaitBestPractices.MVVM;
using MvvmHelpers;
using MyApp.Models;
using MyApp.Services;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;


namespace MyApp.ViewModels
{
    public class ProdutosViewModel : BaseViewModel
    {

        public AsyncCommand RefreshCommand { get; }

        private ObservableCollection<Produto> _ListaProdutos;
        public ObservableCollection<Produto> ListaProdutos
        {
            get => _ListaProdutos;
            set
            {
                _ListaProdutos = value;
                OnPropertyChanged();
            }
        }

        public ProdutosViewModel()
        {
            ListaProdutos = new ObservableCollection<Produto>();
            RefreshCommand = new AsyncCommand(LoadProdutos);
        }
        public async Task LoadProdutos()
        {
            IsBusy = true;
            ProdutosService produtosService = new ProdutosService();
            List<Produto> listaProduto = await produtosService.GetProdutos();

            ListaProdutos.Clear();

            foreach (Produto item in listaProduto)
            {
               ListaProdutos.Add(item);
            }
            IsBusy = false;
        }

    }   
}
