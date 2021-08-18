/**
 * @param {string} s
 * @return {string}
 */
 var reverseVowels = function(s) {
  const dicSet = new Set(['a','e','i','o','u','A','E','I','O','U',])
  const map = new Map()
  const l = s.length
  const arr = s.split('')
  let start = 0, end = l - 1
  while(start < end) {
    if (dicSet.has(s[start])) {
      if (dicSet.has(s[end])) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++
        end--
      } else {
        end--
      }
    } else {
      start++
    }
  }
  return arr.join('')
};

const s = 'ajqiqwjijqiwwjiqbnfijnzxbvkbqijbqo'

console.time()
console.log(reverseVowels(s))
console.timeEnd()