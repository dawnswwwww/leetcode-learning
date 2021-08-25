
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
 var numRescueBoats = function(people, limit) {
  people.sort((a, b) => a - b)
  let res = 0
  let head = 0
  for (let i = people.length - 1; i >= 0;) {
    const c = people[i]
    if (c < limit && people[head] <= limit - c) {
      head++
    }
    res++
    i--
    if(head > i) break
  }
  return res
};

const people = [3,5,3,4]
const limit = 5

console.time();
console.log(numRescueBoats(people, limit))
console.timeEnd()