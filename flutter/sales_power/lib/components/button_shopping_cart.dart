import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class ButtonShoppingCart extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.tealAccent,
        borderRadius: BorderRadius.only(
            topLeft: Radius.circular(100),
        bottomLeft: Radius.circular(100))
      ),
      alignment: Alignment.centerRight,
      height: 30,
      padding: EdgeInsets.all(10),
      child: Icon(
        Icons.shopping_cart,
        color: Colors.blueAccent,
        size: 35,
      ),
    );
  }
}
