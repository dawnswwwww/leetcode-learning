/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let a = s.split('')
    let m = 0
    let t = []
    let c = 0
    for (let i = 0; i < a.length; i++) {
      if (t.indexOf(a[i]) < 0) {
        t.push(a[i])
        c++
        if (c > m) m = c
      } else {
        t = [...t.splice(t.indexOf(a[i]) + 1),a[i]]
        c = t.length
        if (c > m) m = c
      }
    }
    return m
};

console.log(lengthOfLongestSubstring('dvdf'))