
import 'package:intl/intl.dart';
import 'dart:convert';

Product productFromJson(String str) => Product.fromJson(json.decode(str));

String productToJson(Product data) => json.encode(data.toJson());

class Product {
  Product({
    this.description,
    this.stock,
    this.price,
  });

  String description;
  int stock;
  double price;

  factory Product.fromJson(Map<String, dynamic> json) => Product(
        description: json["description"],
        stock: json["stock"],
        price: json["price"].toDouble(),
      );

  Map<String, dynamic> toJson() => {
        "description": description,
        "stock": stock,
        "price": price,
      };

  String formatPrice(double price) {
    final realFormat = NumberFormat.currency(locale: 'pt_BR', symbol: 'R\$');
    return realFormat.format(price);
  }
  String subTitle(){
    return 'Preço : '+formatPrice(price)  + '    Estoque : '+stock.toString();
  }
}
