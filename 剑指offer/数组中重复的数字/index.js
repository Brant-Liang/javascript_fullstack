function duplicate(numbers)
{
    // write code here
    //这里要特别注意~找到任意重复的一个值并赋值到duplication[0]
    //函数返回True/False
    for (let i = 0; i < numbers.length; i++) {
      if(numbers.indexOf(numbers[i]) !== -1) {
        return true
      }
    }
    return false
}
console.log(duplicate([1,0,2,5,3]));