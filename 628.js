/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    const a = nums[n - 1] * nums[n - 2] * nums[n - 3]
    const b = nums[n - 1] * nums[0] * nums[1]
    return a - b > 0 ? a : b
};