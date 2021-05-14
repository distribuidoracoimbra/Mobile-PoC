
import 'package:flutter/cupertino.dart';

class TextDetail  extends StatelessWidget {
  final String label;
  final TextStyle style;

  const TextDetail({this.label, this.style});
  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(top: 10, left:2, right: 0),
      child: apllyStyle(label)
    );
  }

  apllyStyle(String label) {
    if(style==null){
      return Text(label);
    }
    return Text(label, style: this.style);
  }
}
