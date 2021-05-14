import 'package:flutter/material.dart';
import 'package:sales_power/services/firebase_startup.dart';

class SplashPage extends StatefulWidget {
  @override
  SplashPageState createState() => SplashPageState();
}

class SplashPageState extends State<SplashPage> {
  @override
  void initState() {
    super.initState();
    startupFirebase();
  }

  Future<void> startupFirebase() async {
    return await Future(() async {
      await FirebaseStartup.initializeFirebase();
      await Future.delayed(Duration(seconds: 1));
      Navigator.pushReplacementNamed(context, '/login');
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      body: Center(
        child: Image.asset(
          'assets/images/logo.png',
          height: 50,
          color: Colors.white,
        ),
      ),
    );
  }
}
