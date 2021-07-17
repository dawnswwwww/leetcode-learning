/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let res = 0
    let i = 1
    while (true) {
      res+=i
      if (res > n) {
        res-=i
        return i - 1
      }
      i++
    }
};