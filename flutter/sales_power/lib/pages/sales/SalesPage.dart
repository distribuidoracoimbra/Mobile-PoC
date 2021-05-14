import 'package:flutter/material.dart';
import 'package:sales_power/components/appbbar_default.dart';

class SalesListPage extends StatefulWidget {
  @override
  _SalesListPage createState() => new _SalesListPage();
}

class _SalesListPage extends State<SalesListPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      extendBody: true,
      appBar: AppBarDefault(
        titulo: 'Lista de pedidos',
      ),
      body: Container(
        height: MediaQuery.of(context).size.height,
        child: Center(
          child: Text('Em Breve'),
        ),
      ),
    );
  }
}
