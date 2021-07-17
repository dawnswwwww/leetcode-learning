
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b)
    return nums.reduce((total, item, index) => {
      if (index % 2 === 0) {
        return total+=item
      } else {
        return total
      }
    })
  };