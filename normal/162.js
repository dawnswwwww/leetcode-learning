/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  if (nums.length === 1) return 0
  if (nums.length === 2) return nums[0] > nums[1] ? 0 : 1
  let tail = nums.length - 1
  let lastHead = -Infinity
  let lastTail = -Infinity
  for (let i = 0;i <= nums.length && tail >= 0;) {
    if (lastHead > nums[i]) return i - 1
    else lastHead = nums[i]
    if (lastTail > nums[tail]) return tail + 1
    else lastTail = nums[tail]
    i++ 
    tail--
  }
  return -1
};