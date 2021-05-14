import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:sales_power/components/appbbar_default.dart';
import 'package:sales_power/models/product.dart';

class ListOfProducts extends StatefulWidget {
  @override
  _ListOfProductsState createState() => _ListOfProductsState();
}

class _ListOfProductsState extends State<ListOfProducts> {
  List<Product> items;
  List<Product> product;
  var db = FirebaseFirestore.instance;

  StreamSubscription<QuerySnapshot> produtoinscricao;

  @override
  void initState() {
    super.initState();

    items = [];
    produtoinscricao?.cancel();

    produtoinscricao = db.collection("product").snapshots().listen((snapshot) {
      product = snapshot.docs
          .map(
            (documentSnapshot) => Product.fromJson(documentSnapshot.data()),
          )
          .toList();
      onSearchTextChanged('');
    });
  }

  @override
  void dispose() {
    produtoinscricao.cancel();
    super.dispose();
  }

  TextEditingController controller = new TextEditingController();

  onSearchTextChanged(String text) async {
    setState(() {
      this.items = this
          .product
          .where((element) =>
              element.description.toLowerCase().contains(text.toLowerCase()))
          .toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBarDefault(
        titulo: 'Lista de Produtos',
      ),
      body: Column(
        children: <Widget>[
          new Container(
            color: Theme.of(context).primaryColor,
            child: new Padding(
              padding:
                  const EdgeInsets.only(left: 8.0, right: 8.0, bottom: 8.0),
              child: new Card(
                child: new ListTile(
                  leading: new Icon(Icons.search),
                  title: new TextField(
                    controller: controller,
                    decoration: new InputDecoration(
                        hintText: 'Digite aqui para pesquisar',
                        border: InputBorder.none),
                    onChanged: onSearchTextChanged,
                  ),
                  trailing: new IconButton(
                    icon: new Icon(Icons.cancel),
                    onPressed: () {
                      controller.clear();
                      onSearchTextChanged('');
                    },
                  ),
                ),
              ),
            ),
          ),
          Expanded(
              child: StreamBuilder<QuerySnapshot>(
            stream: getListOfProducts(),
            builder: (context, snapshot) {
              switch (snapshot.connectionState) {
                case ConnectionState.none:
                case ConnectionState.waiting:
                  return Center(
                    child: CircularProgressIndicator(),
                  );
                default:
                  List<DocumentSnapshot> documents = snapshot.data.docs;
                  return ListView.builder(
                      itemCount: items.length,
                      itemBuilder: (context, index) {
                        return ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: Container(
                              margin: EdgeInsets.only(
                                  left: 4, top: 1, right: 4, bottom: 1),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                boxShadow: [
                                  BoxShadow(
                                    color: Colors.blueAccent,
                                    spreadRadius: 5,
                                    blurRadius: 7,
                                    offset: Offset(
                                        0, 3), // changes position of shadow
                                  ),
                                ],
                              ),
                              child: ListTile(
                                title: Text(items[index].description),
                                subtitle: Text(items[index].subTitle()),
                                leading: Icon(Icons.shopping_cart),
                              )),
                        );
                      });
              }
            },
          ))
        ],
      ),
    );
  }

  Stream<QuerySnapshot> getListOfProducts() {
    return FirebaseFirestore.instance.collection("produtos").snapshots();
  }
}
