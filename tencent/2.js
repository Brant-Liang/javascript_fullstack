function addTwoNums(num1, num2) {
  let maxLength = Math.max(num1.length, num2.length);
  num1 = num1.padStart(maxLength, 0);
  num2 = num2.padStart(maxLength, 0);
  let c = 0;
  let sum = "";
  for(let i = maxLength - 1; i >= 0; i--) {
    if(parseInt(num1[i]) + parseInt(num2[i]) + c > 9) {
      sum = (parseInt(num1[i]) + parseInt(num2[i]) + c - 10) + sum;
      c = 1;
    }
    else {
      sum = (parseInt(num1[i]) + parseInt(num2[i]) + c) + sum;
      c = 0;
    }
  }
  if(c === 1) {
    sum = '1' + sum;
  }
  return sum;
}




console.log(addTwoNums("123456789", "1161468515"));
console.log(123456789 + 1161468515);