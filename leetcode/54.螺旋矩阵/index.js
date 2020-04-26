var spiralOrder = function(matrix) {
  if(matrix.length = 0)return [];
  var top = 0;
  var bottom = matrix.length - 1;
  var left = 0;
  var right = matrix[0].length - 1;

  var direction = "right";
  let result = [];
  while(left <= right && top <= bottom) {
    if(direction === "right") {
      for(let i = left; i <= right; i++) {
        result.push(matrix[top][i])
      }
      top++;
      direction = "down";
    }
    else if(direction === "down") {
      for(let i = top; i <= bottom; i++) {
        result.push(matrix[i][right])
      }
      right--;
      direction = "left";
    }
    else if(direction === "left") {
      for(let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--;
      direction = "up";
    }
    else if(direction === "up") {
      for(let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++;
      direction = "right";
    }
  }
  return result;
}