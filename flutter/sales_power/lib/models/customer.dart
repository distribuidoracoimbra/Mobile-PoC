import 'package:intl/intl.dart';
import 'dart:convert';

Customer customerFromJson(String str) => Customer.fromJson(json.decode(str));

String customerToJson(Customer data) => json.encode(data.toJson());

class Customer {
  Customer({
    this.name,
    this.email,
    this.balance,
    this.cpfCnpj,
    this.address,
  });

  String name;
  String email;
  double balance;
  String cpfCnpj;
  String address;

  String formatbalance() {
    final realFormat = NumberFormat.currency(locale: 'pt_BR', symbol: 'R\$');
    return realFormat.format(balance);
  }

  String subTitle(){
    final realFormat = NumberFormat.currency(locale: 'pt_BR', symbol: 'R\$');
    return 'email : '+email  + '    Limite: '+formatbalance().toString();
  }

  factory Customer.fromJson(Map<String, dynamic> json) =>
      Customer(
        name: json["name"],
        email: json["email"],
        balance: json["balance"],
        cpfCnpj: json["cpfCnpj"],
        address: json["address"],
      );

  Map<String, dynamic> toJson() =>
      {
        "name": name,
        "email": email,
        "balance": balance,
        "cpfCnpj": cpfCnpj,
        "address": address,
      };

  String initial() {
    if (this.name
        .split(' ')
        .length > 1)
      return this.name
          .split(' ')
          .first
          .substring(0, 1)
          .toUpperCase() + this.name
          .split(' ')
          .last
          .substring(0, 1)
          .toUpperCase();
    else
      return this.name
          .split(' ')
          .first
          .substring(0, 2)
          .toUpperCase();
  }
}
