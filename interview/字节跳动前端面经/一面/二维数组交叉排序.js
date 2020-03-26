function crossSort(arr) {
  if(arr.length === 0) return arr;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length !== arr.length) return false
  }
  let line = arr[0].length
  let element = []
  // if(arr.length % 2 === 0 && )
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(i === j || i === line - 1 - j )
        element.push(arr[i][j])
    }
  }
  let index = 0
  element.sort((a, b) => a - b)
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if(i === j || i === line - 1 - j ){
        arr[i][j] = element[index]
        index++
      }
    }
  }
  return arr
}

console.log(crossSort([ [6, 2, 1, 4], 
                        [1, 2, 3, 1], 
                        [5, 3, 2, 1],
                        [1, 5, 2, 3]
                      ]));