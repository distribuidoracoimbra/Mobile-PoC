import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:sales_power/components/appbbar_default.dart';
import 'package:sales_power/models/product.dart';


class ProductDetailPage extends StatelessWidget {
  final Product product;

  const ProductDetailPage({this.product});

  @override
  Widget build(BuildContext context) {
    return Container(

      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBarDefault(
          titulo: '',
        ),
        body: Align(
          alignment: Alignment.bottomCenter,
          child: Container(
            height: 400,
            margin: EdgeInsets.all(16),
            child: Detail(product: product),
          ),
        ),
      ),
    );
  }
}


class Detail extends StatelessWidget {
  final Product product;

  const Detail({this.product});

  @override
  Widget build(BuildContext context) {
    return Card(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text( product.description,
              style: Theme.of(context).textTheme.headline1),
          Container(
            margin: EdgeInsets.only(left: 2, right: 16, bottom: 16, top: 8),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text('Preço: ' + product.price.toString(),
                    style: Theme.of(context).textTheme.headline2),
                Text(
                  'Estoque: ' + product.price.toString(),
                  style: Theme.of(context).textTheme.headline2,
                ),
                FlatButton(
                  color: Theme.of(context).primaryColor,
                  onPressed: () {},
                  child:
                      Text('Adicionar', style: TextStyle(color: Colors.white)),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}

