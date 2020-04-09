function JuiceMaker() {
/*   this.Apple = function (meta) {

  },
  this.Pear = function (meta) {

  } */
}
JuiceMaker.prototype.make = function (type, meta) {
    // 1、判断工厂是否有生产能力
    if(typeof this[type] === 'function') {
      var func = this[type]
      func.prototype = JuiceMaker.prototype
      return new func(meta)
    } else {
      throw '很抱歉，工厂不能生产该商品'
    }
}

//扩展生产线
JuiceMaker.prototype.extent = function (obj) {
  for(let key in obj) {
    this[key] = obj[key]
  }
}
JuiceMaker.prototype.extent({
  "Apple": function (meta) {
    console.log('生产了一杯苹果汁儿，' + meta);
  },
  "Pear": function (meta) {
    console.log('生产了一杯梨子汁儿，' + meta);
  },
})

// 实例化
var maker = new JuiceMaker()

var appleObj = maker.make('Apple', '一个苹果，一斤水')
console.log(appleObj);
var pearObj = maker.make('Pear', '两个梨子，一吨水')
console.log(pearObj);