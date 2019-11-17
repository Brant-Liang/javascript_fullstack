/** 5.7
 *  给n个人分配n件工作
 *  
 */ 
var cost = 0;
var x = [];
var myC = [[1,3,4], [4, 5, 6],[1, 7, 8]];
var n = myC.length

for(let i = 0; i < n; i++){
  cost += myC[i][i]     //cost : 第i个人分配第i件工作总成本
}
function work(i, count){
  if(i > myC.length && count < cost ){
      cost = count;
      return ;
  }
  if(count < cost){
      for(var j = 0; j < n; j++){
          if(x[j] === 0){
              x[j] = 1;
              work(i + 1, count + C[i][j]);
              x[j] = 0;
          }
      }
  }
  
}
//myC[i][j] i代表第几个人 j代表每件事在不同人手中的费用
work(1, 0, myC)
console.log(10);
