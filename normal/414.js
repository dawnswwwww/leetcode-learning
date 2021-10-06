/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
  const res = Array.from(new Set(nums)).sort((a, b) => b - a)
  return res[2] ?? res[0]
};