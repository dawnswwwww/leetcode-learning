/**
 * @param {string[]} nums
 * @return {string}
 */
 var findDifferentBinaryString = function(nums) {
  const n = nums[0].length
  for (let i = 0; i < Math.pow(2, n) - 1; i ++) {
    let str = i.toString(2).padStart(n, '0')
    if (!~nums.indexOf(str)) return str
  }
  return '1'
};



const nums =  ["111","011","001"]
console.time()
console.log(findGCD(nums))
console.timeEnd()