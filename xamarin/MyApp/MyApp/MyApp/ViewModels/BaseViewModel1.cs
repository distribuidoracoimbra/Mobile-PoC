using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Runtime.CompilerServices;
using System.Text;

namespace MyApp.ViewModels
{
    public class BaseViewModel1 : INotifyPropertyChanged
    {

        public event PropertyChangedEventHandler PropertyChanged;

        public void OnPropertyChanged([CallerMemberName] string name = "") =>
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));

        public bool IsBusy { get; set; }
        //
        // Resumo:
        //     Gets or sets a value indicating whether this instance is not busy.
        //
        // Valor:
        //     true if this instance is not busy; otherwise, false.
        public bool IsNotBusy { get; set; }
        //
        // Resumo:
        //     Gets or sets a value indicating whether this instance can load more.
        //
        // Valor:
        //     true if this instance can load more; otherwise, false.
        public bool CanLoadMore { get; set; }

    }
}
