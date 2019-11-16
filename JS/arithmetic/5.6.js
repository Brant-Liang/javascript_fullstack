/**
 *  n 从第一个数遍历到最后一个
 *  num 要求和为num
 *  arrS 集合 存储所有元素
 */ 
var vis = []; // 存储集合状态 判断数是否满足成为符合的子集合
var valSum = 0;  //当前和
function getAllChild(n ,num, arrS) {
  if( n > arrS.length){ // n大于S的个数时 结束
    return;
  }
	// 取数n
  vis[n] = true;   
  valSum += arrS[n];
	//满足  输出arrS[i]
	if(valSum === num){
    var arr = [];
		for(let i = 0; i <= n; i++){
			if(vis[i] === true){
				arr.push(arrS[i])
			}
    }
    console.log(arr);
	}else if(valSum < num){     // 不足  继续往后取数
		getAllChild(n + 1, num, arrS);
	}
  //回溯
	vis[n] = false;
	valSum -= arrS[n];  //不满足的数就从valSum中删除
  getAllChild(n + 1, num, arrS);
   return ;
}
var myArrS = [1, 2, 3, 5, 5, 13, 16, 12];
getAllChild(0, 11, myArrS)