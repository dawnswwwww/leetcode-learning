/**
 * @param {number} n
 * @return {number}
 */
 var getMaximumGenerated = function(n) {
  const arr = [0, 1]
  if (n === 0) return 0
  for (let i = 2; i < n + 1; i++) {
      if (i % 2) {
        // 单数
        arr[i] = arr[(i - 1)/ 2] + arr[(i - 1)/ 2 + 1]
      } else {
        // 双数
        arr[i] = arr[i / 2]
      }
  }
   return Math.max(...arr)
};


console.time()
console.log(getMaximumGenerated(100))
console.timeEnd()