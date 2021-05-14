import 'package:sales_power/models/address.dart';

class Customer {
  String name;
  String cpfCnpj;
  String email;
  List phones;
  List<Address> address;
  double balance;

  Customer({this.name, this.cpfCnpj, this.phones, this.address, this.balance, this.email});

  String initial(){
    if (this.name.split(' ').length > 1)
      return   this.name.split(' ').first.substring(0,1).toUpperCase() +  this.name.split(' ').last.substring(0,1).toUpperCase() ;
    else
      return this.name.split(' ').first.substring(0,2).toUpperCase();
  }

}
