import 'package:flutter/cupertino.dart';
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
          body: ContentWidget(),
          floatingActionButton: FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () {

            },
          ) ,
      ),

    );
  }
}
class ContentWidget extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return ContentWidgetState();
  }
}

class ContentWidgetState extends State<ContentWidget> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              RaisedButton(
                onPressed: () {
                  print("监听 $counter");
                  setState(() {
                    counter++;
                  });
                },
                child: Text("计数+1"),
              ),
              RaisedButton(
                onPressed: () {
                  print("监听 $counter");
                  setState(() {
                    counter--;
                  });
                },
                child: Text("计数-1"),
              )
            ],
          ),
          Text("当前计数：$counter", style: TextStyle(fontSize: 25),),
        ],
      ),

    );
  }
}
