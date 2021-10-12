/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    if ( i % 3 && i % 5) {
      res.push(String(i))
    } else {
      let s = ''
      !(i % 3) && (s+='Fizz')
      !(i % 5) && (s+='Buzz')
      res.push(s)
    }
  }
  return res
};

const n = 31

console.time()
console.log(fizzBuzz(n))
console.timeEnd()