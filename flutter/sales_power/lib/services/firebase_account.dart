import 'package:firebase_auth/firebase_auth.dart';

class FirebaseAccount {
  static User getUser() {
    return FirebaseAuth.instance.currentUser;
  }

  static Future<User> signUpWithEmailPassword(
      String email, String password) async {
    UserCredential userCredential =
        await FirebaseAuth.instance.createUserWithEmailAndPassword(
      email: email,
      password: password,
    );

    return userCredential.user;
  }

  static Future<User> signInWithEmailPassword(
      String email, String password) async {
    UserCredential userCredential =
        await FirebaseAuth.instance.signInWithEmailAndPassword(
      email: email,
      password: password,
    );

    return userCredential.user;
  }

  static Future signOut() async {
    await FirebaseAuth.instance.signOut();
  }
}
