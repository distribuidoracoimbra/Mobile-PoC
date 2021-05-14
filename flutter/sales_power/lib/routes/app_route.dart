import 'package:flutter/material.dart';
import 'package:sales_power/models/customer.dart';
import 'package:sales_power/pages/account/login_page.dart';
import 'package:sales_power/pages/custumer/detail.dart';
import 'package:sales_power/pages/custumer/list.dart';
import 'package:sales_power/pages/main/main_page.dart';
import 'package:sales_power/pages/product/list.dart';
import 'package:sales_power/pages/sales/SalesPage.dart';
import 'package:sales_power/pages/splash/splash_page.dart';

class AppRouteGenerator {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    final args = settings.arguments;

    switch (settings.name) {
      case '/':
        return MaterialPageRoute(builder: (_) => SplashPage());
      case '/login':
        return MaterialPageRoute(builder: (_) => LoginScreen());
      case '/main':
        return MaterialPageRoute(builder: (_) => MainPage());
      case '/custumer-list':
        return MaterialPageRoute(builder: (_) => CustomerListPage());
      case '/custumer-detail':
        // Validation of correct data type
        if (args is Customer) {
          return MaterialPageRoute(
            builder: (_) => CustomerDetailPage(args),
          );
        }
        // If args is not of the correct type, return an error page.
        // You can also throw an exception while in development.
        return _errorRoute('${settings.name}: Parâmetros incorretos');
      case '/product-list':
        return MaterialPageRoute(builder: (_) => ListOfProducts());
      case '/sales-list':
        return MaterialPageRoute(builder: (_) => SalesListPage());
      default:
        // If there is no such named route in the switch statement, e.g. /third
        return _notFoundRoute(settings.name);
    }
  }

  static Route<dynamic> _errorRoute(String erro) {
    return MaterialPageRoute(builder: (_) {
      return Scaffold(
        appBar: AppBar(
          title: Text('Error'),
        ),
        body: Center(
          child: Text('$erro'),
        ),
      );
    });
  }

  static Route<dynamic> _notFoundRoute(String route) {
    return MaterialPageRoute(builder: (_) {
      return Scaffold(
        appBar: AppBar(
          title: Text('Error'),
        ),
        body: Center(
          child: Text(
            'Página $route não encontrada',
            style: TextStyle(
              fontSize: 21,
            ),
          ),
        ),
      );
    });
  }
}
