main(List<String> args) {

  var message = "Hello World";
  var message2 = 'hello world';
  var message3 = ''' 
  abc
  cba
  ''';

  //拼接
  final name = "why";
  final age = 18;
  final height = 1.88;

  //$后直接跟变量可省略{}

  //如果{}中是一个表达式 则不可省略
  print("name:$name age:$age height:$height");
  print("${name.runtimeType}");
}