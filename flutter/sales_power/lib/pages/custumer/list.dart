import 'dart:async';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:flutter/material.dart';
import 'package:sales_power/models/customer.dart';

import 'detail.dart';

class CustomerListPage extends StatefulWidget {
  @override
  _CustumerlistViewState createState() => _CustumerlistViewState();
}

class _CustumerlistViewState extends State<CustomerListPage> {
  List<Customer> items;
  var db = FirebaseFirestore.instance;

  StreamSubscription<QuerySnapshot> customerInstance;

  @override
  void initState() {
    super.initState();

    items = [];
    customerInstance?.cancel();

    customerInstance = db.collection("customer").snapshots().listen((snapshot) {
      final List<Customer> customer = snapshot.docs
          .map(
            (documentSnapshot) => Customer.fromJson(documentSnapshot.data()),
          )
          .toList();
      setState(() {
        this.items = customer;
      });
    });
  }

  @override
  void dispose() {
    customerInstance.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Lista de Clientes'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
              child: StreamBuilder<QuerySnapshot>(
            stream: getListOfCustomer(),
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
                        return ListTile(
                          leading: CircleAvatar(
                            backgroundColor: Colors.tealAccent,
                            //border color
                            child: Padding(
                              padding: const EdgeInsets.all(3.0),
                              //border size
                              child: CircleAvatar(
                                  backgroundColor: Colors.blueAccent,
                                  child: Text(items[index].initial())),
                            ),
                          ),
                          title: Text(items[index].name,
                              style: TextStyle(
                                  fontSize: 20.0, color: Colors.black)),
                          subtitle: Text(items[index].subTitle()),
                          onTap: () {
                            Navigator.push(
                                context,
                                new MaterialPageRoute(
                                    builder: (context) =>
                                        CustomerDetailPage(items[index])));
                          },
                        );
                      });
              }
            },
          ))
        ],
      ),
    );
  }

  Stream<QuerySnapshot> getListOfCustomer() {
    return FirebaseFirestore.instance.collection("customer").snapshots();
  }
}
