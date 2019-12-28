let proto = {

}

function defineGetter(prop, name) { //参数分别是要代理的对象和对象上的属性
  proto.__defineGetter__(name, function() { // 每个对象都有__defineGetter__方法，可以用这个方法进行代理
    return this[prop][name] //this是ctx ctx.url得到的就是this
  })
}

function defineSetter(prop, name) {
  proto.__defineSetter__(name, function(val){
    this[prop][name] = val
  })
}
defineGetter('request', 'url')
defineGetter('request', 'path')
defineGetter('response', 'body')
defineSetter('response', 'body')
module.exports = proto