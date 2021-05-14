import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';

class FirebaseStartup {
  static Future<FirebaseApp> initializeFirebase({
    BuildContext context,
  }) async {
    FirebaseApp firebaseApp = await Firebase.initializeApp();
    return firebaseApp;
  }
}
