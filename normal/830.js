/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function(s) {
    let res = []
    let max = 0
    let len = s.length
    for (let i = 0; i < len;) {
      let n = 0
      let cur = s[i]
      let j = i
      console.log(cur)
      while (s[j] === cur) {
        n++
        j++
      } 
    //   if (n > max) {
    //     res = [[i, i + n - 1]]
    //     max = n
    //   } else if (n === max) {
    //     res.push([i, i + n - 1])
    //   }
    if (n >= 3) {
        res.push([i, i + n - 1])
    }
      i+=n
    }
    return res
  };

  console.log(largeGroupPositions("abcdddeeeeaabbbcd"))