import 'package:flutter/material.dart';

class AppBarDefault extends StatelessWidget with PreferredSizeWidget {
  final String titulo;

  AppBarDefault({this.titulo});

  @override
  Widget build(BuildContext context) {
    return AppBar(
      title: (Text(
        titulo,
        style: TextStyle(color: Colors.white),
      )),
      backgroundColor: Theme.of(context).primaryColor,
      elevation: 0.0,
      centerTitle: true,
      actions: <Widget>[
      //  StateLogo(),
      ],
    );
  }

  @override
  // TODO: implement preferredSize
  Size get preferredSize => Size.fromHeight(kToolbarHeight);
}
