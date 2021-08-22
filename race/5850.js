/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
  const max = Math.max(...nums)
  const min = Math.min(...nums)
  return getGCD(max, min)
};

const getGCD = (bigger, smaller) => {
    let temp = bigger % smaller
    if (temp) return getGCD(smaller, temp)
    return smaller
}


const nums =  [2,5,6,9,10]
console.time()
console.log(findGCD(nums))
console.timeEnd()