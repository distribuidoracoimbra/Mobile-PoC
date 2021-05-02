using MyApp.Models;
using MyApp.Services;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Threading.Tasks;

namespace MyApp.ViewModels
{
    public class ProdutosViewModel : BaseViewModel
    {
        private readonly ProdutosService services;
        private ObservableCollection<Produto> _ListaProdutos = new ObservableCollection<Produto>();
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
            services = new ProdutosService();
            ListaProdutos =services.GetProdutosObservable();
        }
    }   
}
