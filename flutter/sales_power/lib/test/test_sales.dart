
import '../models/customer.dart';
import '../models/product.dart';
import '../models/sale.dart';
import '../models/sale_item.dart';

main() {
  var sale = Sale(
      customer: Customer(
          name: 'Catiane',
          cpfCnpj: '123.456.789-72',
          balance: 1.000),
      itens: <SaleItem>[
        SaleItem(
            quantity: 2.0,
            discount: 0.0,
            product: Product(description: 'Arroz', price: 25.0, stock: 100)),
        SaleItem(
          quantity: 1,
          discount: 0.2,
          product: Product(description: 'Feijão', price: 5.0, stock: 50),
        )
      ]);

  print("the total value of the sale is: R\$${sale.amount}");
}
