main(List<String> args) {
  // final p = Person("Brant", 18)..eating();
  final p2 = Person(name:"Ariel",age: 17)..eating();
  Map<String, dynamic> info1 = {
    "name": "Brant",
    "age": 30,
    "height": 1.98
  };
  final p1 = Person.fromMap(info1)..eating();
  final rec = Rectangle(20, 10).toString(); 
  print(rec);
}

class Person {
  String name;
  int age;
  double height;
  //改造一
  // Person(String name, [int age, double height]) {
  //   this.name = name;
  //   this.age = age;
  // }

  //改造二 语法糖
  Person({this.name,this.age,this.height});
 
  //Dart不支持函数重载
  //命名构造函数
  Person.fromMap(Map<String, dynamic> map) {
    this.name = map["name"];
    this.age = map["age"];
    this.height = map["height"];
  }
  void eating() {
    print("$name在吃东西");
  }
}

class Rectangle {
  int width;
  int height;
  int area;
  //初始化列表
  Rectangle(this.width, this.height): area = width * height;
  @override
  String toString() {
    return "width:$width height:$height area:$area";
  }
}