/**
 * @param {string} s
 * @return {string[]}
 */
 var findRepeatedDnaSequences = function(s) {
  if (s.length < 10) return []
  const len = s.length
  const dic = new Map()
  const res = new Set()
  for (let i = 0; i <= len - 10; i++) {
    const sub = s.substr(i, 10)
    if (dic.has(sub)) res.add(sub)
    else dic.set(sub, true)
  }
  return Array.from(res)
};


const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
console.time()
console.log(findRepeatedDnaSequences(s))
console.timeEnd()