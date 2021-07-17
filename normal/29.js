/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let m = 1
    let n = 1
    let k = divisor
    while (k < dividend) {
      k = k << 1
      n = n << 1
      m++
    }
    if (k === dividend) return m
    let rest = k - dividend
    let j = 1
    let l = divisor
    while (l < rest) {
        l = l << 1
        j++
    }
    l = l >> 1
    if (rest > l) j++
    console.log(n, j, m)
    return n-j

};

const dividend = 29
const divisor = 3

console.log(divide(dividend, divisor))