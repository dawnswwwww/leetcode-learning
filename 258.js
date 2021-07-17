/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let res
      let arr = String(num).split('')
      res = arr.reduce((t, n) => {
          return t = (+t) + (+n)
      })
      console.log(res)
      if (res > 9) {
        return addDigits(res)
      } else {
        return res
      }
  };

  console.log(addDigits(38))