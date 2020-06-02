function ArrayList() {
  this.array = []
  ArrayList.prototype.swap = function(num1, num2) {
    var temp = this.array[num1]
    this.array[num1] =this.array[num2]
    this.array[num2] = temp
  }
  ArrayList.prototype.median = function(left, right) {
    //取出中间的数
    var mid = Math.floor((left + right) / 2)
  
    if(this.array[left] > this.array[right]){
      this.swap(left, right)
    }
    if(this.array[left] > this.array[mid]){
      this.swap(left, mid)
    }
    if(this.array[mid] > this.array[right]){
      this.swap(mid, right)
    }

    //将center换到right-1的位置
    this.swap(mid, right - 1)
    return this.array[right- 1];
  }
  //快速排序
  ArrayList.prototype.quickSort = function() {
    this.quick(0, this.array.length - 1)
  }
  ArrayList.prototype.quick = function(left, right) {
    if(left >= right) return
    //获取枢纽
    var pivot = this.median(left, right)
    //定义变量，用于记录当前找到的位置
    var i = left
    var j = right - 1
    //
    while(true) {
      while(this.array[++i] < pivot) {}
      while(this.array[--j] > pivot) {}
      if(i < j) {
        this.swap(i, j)
      }else {
        break
      }
    }
    this.swap(i, right - 1)
    this.quick(left, i - 1)
    this.quick(i + 1,right)
  }
}
var my = new ArrayList()
my.array.push(11, 2, 7, 6, 8, 1, 22, 34, 56, 23, 13, 12)
my.quickSort()
console.log(my);