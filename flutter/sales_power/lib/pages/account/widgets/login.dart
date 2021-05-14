import 'package:flutter/material.dart';
import 'package:sales_power/services/firebase_account.dart';

class Login extends StatefulWidget {
  @override
  _Login createState() {
    return _Login();
  }
}

class _Login extends State<Login> {
  final _formKey = GlobalKey<FormState>();
  String _email;
  String _password;

  @override
  Widget build(BuildContext context) {
    final focus = FocusScope.of(context);
    return Form(
      key: _formKey,
      child: Container(
        height: MediaQuery.of(context).size.height,
        color: Colors.white,
        padding: EdgeInsets.all(140.0),
        child: Column(
          children: <Widget>[
            Container(
              padding: EdgeInsets.only(top: 60.0),
              child: Center(
                child: Image.asset(
                  'assets/images/logo.png',
                  height: 50,
                  color: Theme.of(context).primaryColor,
                ),
              ),
            ),
            Container(
              padding: EdgeInsets.only(top: 12.0, bottom: 100),
              child: Center(
                child: Text(
                  "Sales Power",
                  style: TextStyle(
                      color: Theme.of(context).primaryColor,
                      fontSize: 21.0,
                      fontWeight: FontWeight.bold),
                ),
              ),
            ),
            Row(
              children: <Widget>[
                Text(
                  "EMAIL",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).primaryColor,
                    fontSize: 15.0,
                  ),
                ),
              ],
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                border: Border(
                  bottom: BorderSide(
                      color: Theme.of(context).primaryColor,
                      width: 0.5,
                      style: BorderStyle.solid),
                ),
              ),
              child: Expanded(
                child: TextFormField(
                  textInputAction: TextInputAction.next,
                  onEditingComplete: () => focus.nextFocus(),
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    hintText: 'exemplo@email.com',
                    hintStyle: TextStyle(color: Colors.grey),
                  ),
                  validator: (value) {
                    if (value.isEmpty) {
                      return 'Digite o seu email';
                    }
                    return null;
                  },
                  onChanged: (value) => _email = value,
                ),
              ),
            ),
            Divider(
              height: 32.0,
            ),
            Row(
              children: <Widget>[
                Text(
                  "SENHA",
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    color: Theme.of(context).primaryColor,
                    fontSize: 15.0,
                  ),
                ),
              ],
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              alignment: Alignment.center,
              decoration: BoxDecoration(
                border: Border(
                  bottom: BorderSide(
                      color: Theme.of(context).primaryColor,
                      width: 0.5,
                      style: BorderStyle.solid),
                ),
              ),
              padding: const EdgeInsets.only(left: 0.0, right: 10.0),
              child: Expanded(
                child: TextFormField(
                  textInputAction: TextInputAction.done,
                  onEditingComplete: () => focus.unfocus(),
                  obscureText: true,
                  textAlign: TextAlign.left,
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    hintText: '********',
                    hintStyle: TextStyle(color: Colors.grey),
                  ),
                  validator: (value) {
                    if (value.isEmpty) return 'Digite a sua senha';
                    if (value.length < 6)
                      return 'A sua senha deve ter pelo menos 6 digitos';
                    return null;
                  },
                  onChanged: (value) => _password = value,
                ),
              ),
            ),
            Divider(
              height: 32.0,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: <Widget>[
                TextButton(
                  onPressed: () => {},
                  child: Text(
                    "Esqueceu a senha?",
                    style: TextStyle(
                      fontWeight: FontWeight.bold,
                      color: Theme.of(context).primaryColor,
                      fontSize: 15.0,
                    ),
                    textAlign: TextAlign.end,
                  ),
                ),
              ],
            ),
            Container(
              width: MediaQuery.of(context).size.width,
              margin: const EdgeInsets.only(top: 40.0),
              alignment: Alignment.center,
              child: Row(
                children: <Widget>[
                  Expanded(
                    child: TextButton(
                      onPressed: () {
                        if (_formKey.currentState.validate()) {
                          try {
                            FirebaseAccount.signInWithEmailPassword(
                                    _email, _password)
                                .then((value) => {
                                      Scaffold.of(context).showSnackBar(SnackBar(
                                          content: Text(
                                              'Usuário criado com sucesso'))),
                                      _formKey.currentState.reset(),
                                      Navigator.pushReplacementNamed(
                                          context, '/main')
                                    });
                          } catch (e) {
                            Scaffold.of(context).showSnackBar(SnackBar(
                                content: Text('Usuário ou senha inválido')));
                          }
                        }
                      },
                      style: ButtonStyle(
                        backgroundColor: MaterialStateProperty.all<Color>(
                          Theme.of(context).primaryColor,
                        ),
                        shape:
                            MaterialStateProperty.all<RoundedRectangleBorder>(
                          RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(30.0)),
                        ),
                      ),
                      child: Container(
                        padding: const EdgeInsets.symmetric(
                          vertical: 12.0,
                          horizontal: 12.0,
                        ),
                        child: Text(
                          "LOGIN",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
