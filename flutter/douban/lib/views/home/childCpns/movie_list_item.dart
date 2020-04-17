import 'package:douban/models/home_model.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class MovieListItem extends StatelessWidget {
  final MovieItem item;
  MovieListItem(this.item);
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.all(10),
      decoration: BoxDecoration(
        border: Border(
          bottom: BorderSide(width: 10, color: Color(0xffe2e2e2) )
        )
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          getRankWidget(),
          SizedBox(height: 12,),
          Text("2"),
          SizedBox(height: 12,),
          getOriginWidget(),
        ],
      ),
    );
  }

  //1、获取排名显示的Widget
  Widget getRankWidget() {
      return Container(
        padding: EdgeInsets.symmetric(vertical: 5,horizontal: 9),
        decoration: BoxDecoration(
          color: Color.fromARGB(255, 238, 205, 144),
          borderRadius: BorderRadius.circular(3)
        ),
        child: Text("No.${item.rank}",style: TextStyle(fontSize: 18,color: Color.fromARGB(255, 131, 95, 36)))
      );
  }
  //2、
  //3、获取原始电影名称的Widget
  Widget getOriginWidget() {
    return Container(
      padding: EdgeInsets.all(12),
      width: double.infinity,
      decoration: BoxDecoration(
        color: Color(0xffeeeeee),
        borderRadius: BorderRadius.circular(5)
      ),
      child: Text(
        item.originalTitle,
        style: TextStyle(fontSize: 18,color: Colors.black54),
      ),
    );
  }
}
