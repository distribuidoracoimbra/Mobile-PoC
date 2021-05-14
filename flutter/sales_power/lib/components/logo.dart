import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class StateLogo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(40),
        boxShadow: [BoxShadow(blurRadius: 5, spreadRadius: 5,  color: Colors.cyanAccent)],
        color: Theme.of(context).primaryColor,
      ),
      alignment: Alignment.centerRight,
      height: 30,
      padding: EdgeInsets.all(10),
      child: Image(
        fit: BoxFit.cover,
        color: Colors.black,
        image: AssetImage('lib/images/logo/logo.png'),
      ),
    );
  }
}
