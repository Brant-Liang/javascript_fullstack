int sum(num num1, num num2) {
  return num1 + num2;
}

/**
 * 位置可选参数 []
 * 命名可选参数 {}
 */
printInfo(String name, [int age = 18, double height = 1.88]) {
  print("$name $age $height");
}
printInfo2(String name, {int age = 19, double height=1.88}) {
  print("$name $age $height");
}
main(List<String> args) {
  print(sum(20, 30));
  print(printInfo("lc",18));
  print(printInfo2("lc",age: 17, height: 1.77));

  List<String> names = ['Ariel', 'Brant', 'Candy'];
  names.forEach((item) => print(item));

  final result = names.map((item) => item + 'aaa');
  print(result);
}