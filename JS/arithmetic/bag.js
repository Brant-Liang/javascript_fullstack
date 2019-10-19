//动态规划背包问题
 
// c[i][j] 表示 前 i个物品，装入容量为 j的最大价值
// v[i] 表示第 i件物品的价值
// w[i] 表示每件物品的重量
//W 表示背包的容量
 
 
// use[i]  , 为 0 表示没取第 i件物品，为1表示取了第i件物品
 
 
function main(v,w,c,W){
   var c = [];
   var use = [];
   for(var i = 0; i <= v.length ; i++){
       c[i] = [];
       use[i] = 0;
       for(var j = 0; j <= W ; j++){
           if(i == 0 || j == 0){
               c[i][j] = 0;
           }
       }
   }
    
   v.unshift(0); //第0件物品，价值为0
   w.unshift(0); //第0件物品，重量为0
   for(var i = 1; i <= v.length; i++){
       for(var j = 1; j <= W; j++ ){
           if(j < w[i]){
               c[i][j] = c[i-1][j];
           }else{
               c[i][j] = Math.max(c[i-1][j],c[i-1][j-w[i]]+v[i]);
           }
            
       }
   }
    
   //逆向获取加入的物品
   var j = W;
   for(var i = v.length; i > 0; i--){
       if(c[i][j] > c[i-1][j]){
           use[i] = 1;
           j=j-w[i];
       }
   }
    
   console.log(use);
    
   return c[n][W];
}
console.log(main([6,3,5,4,6],[2,5,4,2,3],10))