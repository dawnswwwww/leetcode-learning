/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//           if (nums[i] + nums[j] === target) {
//             return [i, j]
//           }
//         }
//     }
// };
let deal = -1
var twoSum = function(nums, target) {
    deal += 1
    let a = nums.shift()
    console.log(nums)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] + a === target) {
          console.log('true')
        return [deal, deal + i + 1]
      }
    }
    return twoSum(nums, target)
    
};

console.log(twoSum([3,2,4],6))