/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves = function(nums) {
  const min = Math.min(...nums)
  return nums.reduce((t, s) => (t + (s - min)), 0)
};