/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysWithKDistinct = function(A, K) {
    if (K === 1) return new Set(A).size
    let res = 0
    const n = A.length
    loop:
    for (let i = 0; i < n; i++) {
      const temp = new Set()
      temp.add(A[i])
      for (let j = i + 1; j < n; j++) {
        temp.add(A[j])
        if (temp.size === K) {
          res++
          console.log(temp)
        }
        if (temp.size > K) continue loop
      }
    }
    return res
};