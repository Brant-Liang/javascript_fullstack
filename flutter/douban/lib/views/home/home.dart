import 'package:douban/models/home_model.dart';
import 'package:douban/network/http_request.dart';
import 'package:douban/views/home/childCpns/movie_list_item.dart';
import 'package:flutter/material.dart';

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Center(child: Text("首页")),
      ),
      body: HomeBody(),
    );
  }
}

class HomeBody extends StatefulWidget {
  @override
  _HomeBodyState createState() => _HomeBodyState();
}

class _HomeBodyState extends State<HomeBody> {
  List<MovieItem> movieItems = [];
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    
    HttpRequest.request("https://douban.uieee.com/v2/movie/top250?start=0&count=20")
      .then((res) {
        final subjects = res.data["subjects"];
        print(subjects);
        List<MovieItem> movies= [];
        for(var sub in subjects) {
          movies.add(MovieItem.fromMap(sub));
        }
        setState(() {
          this.movieItems = movies;
        });

    });
  }
  @override
  Widget build(BuildContext context) {
    return Center(
      child: ListView.builder(
          itemCount: movieItems.length,
          itemBuilder: (BuildContext context,int index){
        return MovieListItem(movieItems[index]);
      }),
    );
  }
}
