import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:sales_power/routes/app_route.dart';

void main() {
  SystemChrome.setSystemUIOverlayStyle(
    SystemUiOverlayStyle(
      statusBarBrightness: Brightness.light,
      statusBarColor: Colors.transparent,
      systemNavigationBarColor: Colors.indigoAccent.shade700,
    ),
  );
  runApp(
    MyApp(),
  );
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Sales Power',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primaryColor: Colors.red.shade400,
        primaryColorDark: Colors.indigoAccent.shade700,
        brightness: Brightness.dark,
      ),
      initialRoute: '/',
      onGenerateRoute: AppRouteGenerator.generateRoute,
    );
  }
}
