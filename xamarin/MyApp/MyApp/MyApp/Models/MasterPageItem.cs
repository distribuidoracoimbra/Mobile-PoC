using System;
namespace MyApp.Models
{
    public class MasterPageItem
    {
        public int id { get; set; }
        public string Title { get; set; }
        public string Icon { get; set; }
        public Type TargetType { get; set; }

    }
}
