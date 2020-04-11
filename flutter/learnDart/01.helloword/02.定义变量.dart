/**
 *  Dart是强类型语言： 变量有自己的类型
 */

main(List<String> args) {
  //1、明确的声明
  String name = "why";
  int age = 18;
  double height = 1.88;
  print("$name $age $height");
  print(name.runtimeType);

  //2、类型推导方式 var const final dynamic
  var message = "hello world";
  print(message.runtimeType); //String

  //const必须直接赋值常量 final可以通过运行时赋值
  const message1 = "hello flutter";
  final message2 = "hello dart";

  final num2 = getNum();

  //dynamic(动态的)
  dynamic bar = "hello";
  bar = 123;
  print(bar.runtimeType); //int

  int num = 123;
  num = 0x123;
}
int getNum() {
  return 10;
}
