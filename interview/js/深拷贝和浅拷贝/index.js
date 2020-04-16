/**
 * 拷贝数据
 *  基本数据类型：
 *    拷贝后会生成一份新的数据，修改拷贝后数据不会影响原数据
 *  拷贝数据的方法
 * 直接赋值给一个变量 （浅拷贝）
 * Object.assign() （浅拷贝）
 * Array.prototype.concat() （浅拷贝）
 * Array.prototype.slice() （浅拷贝）
 * JSON.parse(json.stringify) (深拷贝) 拷贝的数据不能有函数
 * 
 * 深拷贝
 * 特点：拷贝的时候生成新的数据，修改后不会影响原数据
 */
// let obj = {username: 'kobe'}
// let obj2 = Object.assign(obj);
// console.log(obj2);
// obj2.username = 'Brant';
// console.log(obj);

// let arr = [1, 2, {username: "kobe"}]
// // let testArr = [2, 4];
// let arr2 = arr.concat();
// console.log(arr2);
// arr2[2].username = 'Brant';
// console.log(arr);
// let arr3 = arr.slice();
// arr3[2].username = "Ariel";
// console.log(arr);

// let arr4 = JSON.parse(JSON.stringify(arr));
// arr4[2].username = "Carina";
// console.log(arr, arr4);

/*
  如何实现深度拷贝

  知识点
  检测数据类型
  1、typeof 返回数据类型 String Number Boolean Undefined Object Function
  2、Object.prototype.toString.call(Obj)
*/
let res = "abcd";
console.log(Object.prototype.toString.call(res).slice(8, -1));
//定义检测类型的功能函数
function checkedType(target) {
  return Object.prototype.toString.call(target).slice(8, -1)
}
console.log(checkedType(res));

//深度克隆
function deepClone(target) {
  // 判断拷贝的数据类型
  // 初始化变量result为最终克隆的数据
  let result, targetType = checkedType(target);
  if(targetType === "Object") {
    result = {}
  }else if (targetType === "Array") {
    result = []
  } else {
    return result;
  }
  // 遍历 target
  for (let i in target) {
    //获取每一项值
    let value = target[i];
    // 判断每一项值是否存在对象或数组
    if(checkedType(value) === "Object" || checkedType(value) === "Array") {
      //继续遍历获取到的value
      result[i] = deepClone(value);
    } else {
      result[i] = value;
    }
  }
  return result;
}

let arr = [1, 2, {username: "kobe", age: 18}];
let arr2 = deepClone(arr);
arr2[2].username = "梁聪";
console.log(arr, arr2);