/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const temp = String.split('')
    const AL = A.length
    const KL = temp.length
    const res = []
    let n = AL > KL ? AL : KL
    let ad = false
    while(n > 0) {
      res[n - 1] = (A[n - 1] || 0) + (temp[n - 1] || 0)
      n--
    }
};