/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let res = []
    outer:
    for (let i = 0; i < l.length; i++) {
      console.log(l[i], r[i])
      let temp = nums.slice(l[i], r[i] + 1)
      console.log(temp)
      temp.sort((a, b) => a - b )
      let length = temp.length
      if (length === 2) {
        res[i] = true
      } else {
        for (let j = 2; j < length; j++) {
            if (temp[j] - temp[j - 1] !== temp[j - 1] - temp[j - 2]) {
              res[i] = false
              continue outer
            }
            if (j === length - 1) res[i] = true
          }
      }

    }
    return res
};

console.log(checkArithmeticSubarrays([4,6,5,9,3,7], [0,0,2], [2,3,5]))