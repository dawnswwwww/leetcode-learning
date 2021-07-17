/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var shortestSubarray = function(A, K) {
    if (A.length === 1) {
      return A[0] >= K ? 1 : -1
    }
    let res = -1
    let n = A.length
    loop:
    for (let i = 0; i < n; i++) {
      if (A[i] >= K) return 1
      let temp = A[i]
      for (let j = i + 1; j < n; j++) {
        temp+=A[j]
        if (temp >= K) {
          if (res === -1) {
            res = j - i + 1
          } else {
          res = Math.min(j - i + 1, res)
          }
          continue loop
        }
      }
    }
    return res
};