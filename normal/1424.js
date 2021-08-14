/**
 * @param {number[][]} nums
 * @return {number[]}
 */

// 思路: 假设nums中有m个数组，其中数组中最大长度为n， 则对角线总数为m + n - 1 依次遍历
// 结果: 超时
// var findDiagonalOrder = function(nums) {
//     const max = Math.max(...nums.map(a => a.length))
//     const l = nums.length + max - 1 
//     const result = []
//     for (let i = 0; i < l; i++) {
//       for (let j = Math.min(i, nums.length - 1); j >= 0; j--) {
//         const k = i - j
//         if (nums[j][k]) result.push(nums[j][k])
//       }
//     }
//     return result
// };

/**
 * 思路: 同一对角线上横坐标与纵坐标值的和相同, 依次计算并存储,最后返回
 * @param {*} nums 
 * @returns 
 */
var findDiagonalOrder = function(nums) {
  const map = new Map()
  nums.forEach((arr, index) => {
    arr.forEach((num, subIndex) => {
      const pos = index + subIndex
      if (map.has(pos)) map.get(pos).unshift(num)
      else map.set(pos,[num])
    })
  })
  return Array.from(map.values()).flat()
};


const nums = [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]]

console.time()
console.log(findDiagonalOrder(nums))
console.timeEnd()