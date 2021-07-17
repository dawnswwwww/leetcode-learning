/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let res = []
    let f = Math.max(a.length, b.length)
    let ra = a.split('').reverse()
    let rb = b.split('').reverse()
    for (let i = 0; i < f; i++) {
      res[i] = (+ra[i] || 0) + (+rb[i] || 0)
    }
    for (let j = 0; j < res.length; j++) {
      if (res[j] > 1) {
        res[j] -= 2
        if (res[j + 1] === undefined) {
            res[j + 1] = 1
        } else {
            res[j + 1]++
        }
        
      }
    }
    return res.reverse().join('')
}

console.log(addBinary('1101', '111'))