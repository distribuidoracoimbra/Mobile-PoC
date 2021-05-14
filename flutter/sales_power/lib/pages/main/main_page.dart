import 'package:flutter/material.dart';
import 'package:flutter_staggered_grid_view/flutter_staggered_grid_view.dart';
import 'package:sales_power/pages/main/widgets/home_app_bar.dart';
import 'package:sales_power/pages/main/widgets/menu_bottom.dart';
import 'package:charts_flutter/flutter.dart' as charts;

class MainPage extends StatefulWidget {
  @override
  _MainPageState createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  List<charts.Series<LinearSales, int>> seriesList;
  bool animate;

  _createSampleData() {
    final data = [
      new LinearSales(1, 840),
      new LinearSales(2, 547),
      new LinearSales(3, 687),
      new LinearSales(4, 987),
      new LinearSales(5, 1240),
      new LinearSales(6, 520),
      new LinearSales(7, 487),
      new LinearSales(8, 877),
      new LinearSales(9, 1500),
      new LinearSales(10, 1147),
    ];

    animate = true;

    seriesList = [
      new charts.Series<LinearSales, int>(
        id: 'Sales',
        domainFn: (LinearSales sales, _) => sales.day,
        measureFn: (LinearSales sales, _) => sales.sales,
        data: data,
        // Set a label accessor to control the text of the arc label.
        labelAccessorFn: (LinearSales row, _) => '${row.day}: ${row.sales}',
      )
    ];
  }

  Widget _buildTile(Widget child, {Function() onTap}) {
    return Material(
        color: Colors.white,
        elevation: 14.0,
        borderRadius: BorderRadius.circular(4.0),
        shadowColor: Color(0x802196F3),
        child: InkWell(
            onTap: onTap != null
                ? () => onTap()
                : () {
                    print('Not set yet');
                  },
            child: child));
  }

  @override
  Widget build(BuildContext context) {
    _createSampleData();

    return Scaffold(
      backgroundColor: Theme.of(context).primaryColor,
      extendBody: true,
      body: Stack(
        alignment: Alignment.topCenter,
        children: <Widget>[
          StaggeredGridView.count(
            crossAxisCount: 2,
            crossAxisSpacing: 12.0,
            mainAxisSpacing: 12.0,
            padding:
                EdgeInsets.only(top: 100, bottom: 100, left: 16, right: 16),
            children: <Widget>[
              _buildTile(
                Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Text('Total de Vendas',
                                style: TextStyle(color: Colors.blueAccent)),
                            Text('265K',
                                style: TextStyle(
                                    color: Colors.black,
                                    fontWeight: FontWeight.w700,
                                    fontSize: 34.0))
                          ],
                        ),
                        Material(
                            color: Colors.blue,
                            borderRadius: BorderRadius.circular(24.0),
                            child: Center(
                                child: Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: Icon(Icons.timeline,
                                  color: Colors.white, size: 30.0),
                            )))
                      ]),
                ),
              ),
              _buildTile(
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Material(
                          color: Colors.teal,
                          shape: CircleBorder(),
                          child: Padding(
                            padding: const EdgeInsets.all(12.0),
                            child: Icon(Icons.person,
                                color: Colors.white, size: 30.0),
                          ),
                        ),
                        Text('Total de Clientes',
                            style: TextStyle(color: Colors.black54)),
                        Text('2',
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w700,
                                fontSize: 24.0)),
                      ]),
                ),
              ),
              _buildTile(
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Column(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        Material(
                            color: Colors.amber,
                            shape: CircleBorder(),
                            child: Padding(
                              padding: EdgeInsets.all(12.0),
                              child: Icon(Icons.inventory,
                                  color: Colors.white, size: 30.0),
                            )),
                        Text('Produtos',
                            style: TextStyle(color: Colors.black54)),
                        Text('2000',
                            style: TextStyle(
                                color: Colors.black,
                                fontWeight: FontWeight.w700,
                                fontSize: 24.0)),
                      ]),
                ),
              ),
              _buildTile(
                Padding(
                  padding: const EdgeInsets.all(24.0),
                  child: charts.LineChart(
                    seriesList,
                    animate: animate,
                    defaultRenderer: new charts.LineRendererConfig(
                        includeArea: true, stacked: true),
                  ),
                ),
              ),
            ],
            staggeredTiles: [
              StaggeredTile.extent(2, 120.0),
              StaggeredTile.extent(1, 150.0),
              StaggeredTile.extent(1, 150.0),
              StaggeredTile.extent(2, 300.0),
            ],
          ),
          HomeAppBar(),
        ],
      ),
      bottomNavigationBar: Container(
        constraints: BoxConstraints(
            maxWidth: MediaQuery.of(context).size.width,
            maxHeight: MediaQuery.of(context).size.height * 0.14),
        child: MenuBottom(),
      ),
    );
  }
}

class LinearSales {
  final int day;
  final int sales;

  LinearSales(this.day, this.sales);
}
