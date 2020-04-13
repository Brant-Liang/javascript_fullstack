import 'package:flutter/material.dart';

///1、创建Main函数
///2、执行runApp函数
///3、传入Widget -> Text widget
///
/// Text需要传入方向参数
///
/// 存在两个问题
/// 1、hello world没有居中
/// 2、显示的文本有点太小了
void main() =>runApp(MyApp());
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      title: "Hello world", //android多应用切换时显示的标题
      home: Scaffold(
          appBar: AppBar(
            title: Center(
              child: Text("我是标题"),
            ),
          ),
          body: ContentWidget()
      ),

    );
  }
}
class ContentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: TextWidget(),

    );
  }
}

class TextWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Text("Hello world",
        textDirection: TextDirection.ltr,
        style: TextStyle(
        fontSize: 30,
        color: Colors.orange
        ),
    );
  }
}