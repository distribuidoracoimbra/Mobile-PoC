import 'package:sales_power/models/product.dart';

class SaleItem {
  Product product;

  double quantity;
  double _price;
  double discount;

  SaleItem({this.product, this.quantity, this.discount});

  double get price{
    if (product != null && _price==null){
      _price = product.price;
    }
    return _price;
  }

  set price(double newPrice){
    if(newPrice>0){
      _price = newPrice;
    }
  }
  double get amount {
    return quantity * _price;
  }
}
