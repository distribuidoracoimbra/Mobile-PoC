import 'package:flutter/material.dart';

import 'menu_item_bottom.dart';

class MenuBottom extends StatefulWidget {
  //final bool showMenu;

  //const MenuBottom({Key key}) : super(key: key);

  @override
  _MenuBottomState createState() => _MenuBottomState();
}

class _MenuBottomState extends State<MenuBottom> {
  Tween<double> _tween;

  @override
  void initState() {
    super.initState();
    _tween = Tween<double>(begin: 150.0, end: 0.0);
  }

  @override
  Widget build(BuildContext context) {
    return TweenAnimationBuilder<double>(
        tween: _tween,
        duration: Duration(milliseconds: 300),
        curve: Curves.easeOutExpo,
        builder: (context, value, child) {
          return AnimatedPositioned(
            duration: Duration(milliseconds: 200),
            bottom: 0,
            left: value,
            right: value * -1,
            child: IgnorePointer(
              ignoring: false, // widget.showMenu,
              child: AnimatedOpacity(
                duration: Duration(milliseconds: 200),
                opacity: 1,
                child: Container(
                  color: Theme.of(context).primaryColor,
                  child: ListView(
                    physics: BouncingScrollPhysics(),
                    scrollDirection: Axis.horizontal,
                    children: <Widget>[
                      MenuItemBottom(
                        icon: Icons.add_shopping_cart,
                        text: 'Pedidos',
                        event: () => {
                          Navigator.pushNamed(context, '/sales-list'),
                        },
                      ),
                      MenuItemBottom(
                        icon: Icons.person,
                        text: 'Clientes',
                        event: () => {
                          Navigator.pushNamed(context, '/custumer-list'),
                        },
                      ),
                      MenuItemBottom(
                        icon: Icons.inventory,
                        text: 'Produtos',
                        event: () => {
                          Navigator.pushNamed(context, '/product-list'),
                        },
                      ),                      
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 4',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 5',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 6',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 7',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 8',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 9',
                      ),
                      MenuItemBottom(
                        icon: Icons.menu,
                        text: 'Menu 10',
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        });
  }
}
