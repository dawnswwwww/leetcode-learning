/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    let arr = []
    while(nums1.length && nums2.length) {
        if (nums1[0] > nums2[0]) {
          arr.push(nums2.shift())
        } else {
          arr.push(nums1.shift())
        }
    }
      arr.push(...nums1)
      arr.push(...nums2)
    return arr
};

const nums1 = [1,2,3,0,0,0]
const m = 3
const nums2 = [2,5,6]
const n = 3

console.log(merge(nums1, m, nums2, n))