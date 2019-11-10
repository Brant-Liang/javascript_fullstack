// 思想：如果时间不冲突，全都可以销售完
//  如果时间冲突，把利润最大的给留下，其他的删除
class Prod {  //定义产品类
  constructor (sell, day) {
    this.sell = sell; //利润
    this.day = day;   //截止日期
  }
}

function getMaxProd (...Obj) {  // 可传入多个不确定个数参数 可不用传入产品个数
  var sumSell = 0;   
  var noConflict = true;
  for(let i = 0; i < Obj.length; i++){
    sumSell += Obj[i].sell;         //计算出售完的总利润
  }
  for(let i = 0; i < Obj.length; i++){  //判断时间是否冲突
    for(let j = i + 1; j < Obj.length; j++){
      if(Obj[i].day === Obj[j].day){
        noConflict = false;         //有冲突
        if(Obj[i].sell > Obj[j].sell){  //相同时间删除销售额较小的
          Obj.splice(j, 1);
        }else if(Obj[i].sell < Obj[j].sell){
          Obj.splice(i, 1);
        }
      }
    }
  }
  if(noConflict){ //如果总天数小于等于限制日期 返回总利润
    return sumSell
  }
  else{
    var res = 0;
    for(let i = 0; i < Obj.length; i++){
      res += Obj[i].sell
    }
    return res;
  }
}

var a = new Prod(50, 2);  //实例化
var b = new Prod(10, 1);
var c = new Prod(20, 2);
var d = new Prod(30, 1);

console.log(getMaxProd(a, b, c, d));