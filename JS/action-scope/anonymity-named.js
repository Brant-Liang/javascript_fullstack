setTimeout( function(){   //匿名函数表达式
  console.log('I waited 1 second!');
},1000)

setTimeout( function timeoutHander(){ //具名表达式
  console.log('I waited 2 seconds!');
}, 2000)

var a = 2;
(function (){
  var a = 3
  console.log(a);  
}())
console.log(a);
