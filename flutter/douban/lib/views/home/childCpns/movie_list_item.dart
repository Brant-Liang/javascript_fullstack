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
          getMovieContent(),
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
  //2、获取内容显示
  Widget getMovieContent() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        getMovieImage(),
        getDetailDescWidget(),
        getWishWidget (),
      ],
    );
  }
  //2.1获取图片
  Widget getMovieImage() {
    return ClipRRect(
        borderRadius: BorderRadius.circular(5),
        child: Image.network(item.imageURL, height: 150,));
  }
  //2.2详情描述的Widget
  Widget getDetailDescWidget(){
    return Expanded(
      child: Container(
        padding: EdgeInsets.symmetric(horizontal: 10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            getMovieNameWidget(),
            getRankingWidget(),
            getIntroduceWidget()
          ],
        ),
      ),
    );
  }
  //2.2.1 获取电影名称的展示
  Widget getMovieNameWidget() {
    return Stack(
      children: <Widget>[
        Icon(Icons.play_circle_outline, color: Colors.red,size: 24,),
        Text.rich(TextSpan(
          children: [
            TextSpan(text: "      " + item.title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
            TextSpan(text: "(${item.playDate})")
          ]
        ))
      ],
    );
  }
  //2.2.2获取电影评分
  Widget getRankingWidget() {
    return Text("电影评分");
  }
  //2.3获取简介
  Widget getIntroduceWidget() {
    final genresString = item.genres.join(" ");
    final director = item.director.name;
    final actorString = item.casts.join(" ");
    return Text(
      "$genresString / $director / $actorString",
      maxLines: 2,
      overflow: TextOverflow.ellipsis,
      style: TextStyle(fontSize: 16),
    );
  }
  //2.4想看的
  Widget getWishWidget () {

    return  Container(
      padding: EdgeInsets.symmetric(vertical: 25, horizontal: 10),
      child: Column(
        children: <Widget>[
          Image.asset("assets/images/home/wish.png",width: 32,),
          SizedBox(height: 5,),
          Text("想看", style: TextStyle(fontSize: 16,color: Color.fromARGB(255, 235, 170, 60)),)
        ],
      ),
    );
  }
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
