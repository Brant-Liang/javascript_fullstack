/** 5.7
 *  给n个人分配n件工作
 *  
 */ 
var cost = 0;
var x = [];
var myC = [[1,2,3], [4, 5, 6],[7, 8, 9]];

for(let i = 0; i < myC.length; i++){
  cost += myC[i][i]     //cost : 第i个人分配第i件工作总成本
}
function work(i, count, C){
  if(i > myC.length && count < cost ){
      cost = count;
      return ;
  }
  if(count < cost){
      for(var j = 0; j < myC.length; j++){
          if(x[j] === 0){
              x[j] = 1;
              work(i + 1, count + C[i][j], C);
              x[j] = 0;
          }
      }
  }
  return cost
}
//myC[i][j] i代表第几个人 j代表每件事在不同人手中的费用
console.log(work(1, 0, myC))