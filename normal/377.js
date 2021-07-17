/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function(nums, target, flag) {
    let result = 0
    if (!flag && nums.indexOf(target) > -1) result++ 
    const range = nums.filter((i) => i < target).sort((a, b) => a - b)
    for (let i = 0; i < range.length; i++) {
      let rest = target - range[i]
      if (range.indexOf(rest) > -1) result++
      if (range.filter(i => i <= rest).length > 0) result+=combinationSum4(range, rest, true)
    }
    return result
};

const nums = [1,2,3,4,5]
const target = 32
console.time()
console.log(combinationSum4(nums, target))
console.timeEnd()