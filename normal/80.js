var removeDuplicates = function(nums) {
  debugger
  const max = 2
  let pre
  let count = 0
  for (let i = 0; i < nums.length;) {
    if (nums[i] === pre) {
      if (count === max) {
        console.log(nums[i])
        nums.splice(i, 1)
      } else {
        count++
        i++
      }
    } else {
      pre = nums[i]
      count = 1
      i++
    }
  }
  return nums
};

let nums = [1,1,1,2,2,3]

console.log(removeDuplicates(nums))