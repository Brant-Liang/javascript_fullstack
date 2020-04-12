main(List<String> args) {
  //1、List类型
  List<String> name = ["why", "what", "who"];
  //2、set类型
  Set<int> nums = {101,111,123,111,333};
  print(nums);

  /* Set.from() 转换成Set */
  //3、Map类型
  Map<String, dynamic> info = {
    "name": 'lc',
    "age": 18,
    "height": 1.88
  }
}