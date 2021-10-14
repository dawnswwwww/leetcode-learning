/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
  let cur = -Infinity
  return arr.findIndex((num) => {
    if (cur > num) return true
    cur = num
  }) - 1
};


const arr = [24,69,100,99,79,78,67,36,26,19]

console.time()
console.log(peakIndexInMountainArray(arr))
console.timeEnd()