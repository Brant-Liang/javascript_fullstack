function uniqueArr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if(!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

function uniqueObjArr(arr) {
  let res = [];
  for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr[i].length; j++) {
      if(arr[i].id === arr[j].id) {
        
      }
    }
  }
}

console.log(uniqueArr([1,2,3,1,2,3,4,5]));