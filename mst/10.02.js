/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  const sortableStringArr = strs.map(str => [...str].sort().join(''))
  const map = new Map()
  sortableStringArr.forEach((str, index) => {
    const keyString = map.get(str)
    if (keyString) {
      keyString.push(strs[index])
    } else {
      map.set(str, [strs[index]])
    }
  })
  console.log([...map.values()])
  return [...map.values()]
};


const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.time()
console.log(groupAnagrams(strs))
console.timeEnd()