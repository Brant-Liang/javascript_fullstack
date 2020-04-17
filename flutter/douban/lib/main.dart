
import 'package:douban/components/tabbar_item.dart';
import 'package:douban/views/group/group.dart';
import 'package:douban/views/home/home.dart';
import 'package:douban/views/mall/mall.dart';
import 'package:douban/views/profile/profile.dart';
import 'package:douban/views/subject/subject.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      title: "豆瓣电影",
      theme: ThemeData(
        primaryColor: Colors.green,
        highlightColor: Colors.transparent,
        splashColor: Colors.transparent
      ),
      home:  MyStackPage(),
    );
  }
}

class MyStackPage extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return MyStackPageState();
  }
}

class MyStackPageState extends State<MyStackPage> {
  var _currentIndex = 0;
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _currentIndex,
        unselectedFontSize: 14,
        type: BottomNavigationBarType.fixed,
        items: [
          TabBarItem("home", "首页"),
          TabBarItem("subject", "书影音"),
          TabBarItem("group", "小组"),
          TabBarItem("mall", "市集"),
          TabBarItem("profile", "我的")
        ],
        onTap: (int index) {
          setState(() {
            _currentIndex = index;
          });
        },
      ),
      body: IndexedStack(
        index: _currentIndex,
        children: <Widget>[
          Home(),
          Subject(),
          Group(),
          Mall(),
          Profile()
        ],
      ),
    );
  }
}
