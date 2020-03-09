let num = 0
function output() {
  console.log(num+1)
  num++
  if(num >= 10)
    clearInterval(timer)
}

let timer = setInterval(output, 1000)