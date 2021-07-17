/**
 * 
 *给你一个整数数组 nums ，请计算数组的 中心下标 。

数组 中心下标 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 0 ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 最靠近左边 的那一个。如果数组不存在中心下标，返回 -1 。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
  let left = 0
  let right = nums.reduce((t, s) => t+s, 0) - nums[0]
  const n = nums.length
  if (left === right) return 0
  for (let i = 1; i < n; i++) {
    left+=nums[i - 1]
    right-=nums[i]
    if (left === right) return i
  }

  return -1
};

const nums = [1,7,3,6,5,6,3,6,1,2,4,4,7,8,2,4,3,6]

console.time()
console.log(pivotIndex(nums))
console.timeEnd()