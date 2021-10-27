/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    const map = {}
    let count = 0
    let num = Math.pow(2,count)
    const max = 10**9
    while(num < max) {
      map[String(num).split('').sort().join('')] = true
      count++
      num = Math.pow(2,count)
    }
    return !!map[String(n).split('').sort().join('')]
};


const n = 2321

console.time();
console.log(reorderedPowerOf2(n));
console.timeEnd()