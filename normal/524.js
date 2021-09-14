/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
 var findLongestWord = function(s, dictionary) {
  let max = ''
  const fn = (a) => s.includes(a)
  dictionary.forEach(str => {
    if (str.length >= max.length && isContain(str, s)) max = str.length === max.length ? str > max ? max : str : str
  })
  return max 
};


const isContain = (str, s) => {
  if (str.length === 0) return true
  if (s.length === 0) return false
  const index = s.indexOf(str[0])
  if (index === -1) return false
  return isContain(str.slice(1), s.slice(index + 1))

}

const s = 'abpcplea'

const dictionary = ["ale","apple","monkey","plea"]

console.time();
console.log(findLongestWord(s, dictionary))
console.timeEnd()