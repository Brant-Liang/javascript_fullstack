/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  people.sort((a,b) => a - b)
  let boat = 0
  while(people.length > 0) {
    if(people[0] > limit) {
      return false
    }
    else {
      console.log(people)
      if(people[0] + people[1] <= limit) {
        people.splice(people.indexOf(people[0]), 2)
        boat++
      }else {
        people.splice(people.indexOf(people[0]), 1)
        boat++
      }
    }
  }
  return boat
};

console.log(numRescueBoats([5,1,4,2], 6));