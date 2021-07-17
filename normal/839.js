/**
 * @param {string[]} strs
 * @return {number}
 */
var numSimilarGroups = function(strs) {
    const resultList = []
    let index = 0
    while (strs.length) {
      if (!resultList[index]) resultList[index] = []
      resultList[index].push(strs.shift())
      for (let i = 0; i < resultList[index].length; i++) {
        for (let j = 0; j < strs.length; j++) {
          let count = []
          for (let k = 0; k < strs[j].length; k++) {
              console.log(resultList[index][i][k], strs[j][k])
            if (resultList[index][i][k] !== strs[j][k]) count.push(k)
          }
          console.log(count)
          console.log(resultList[index][i][0] === strs[j][count[1]])
          if (count.length === 2 && resultList[index][i][0] === strs[j][count[1]]) {
            resultList[index].push(strs.splice(j, 1))
          }
        }
      }
      index++
    }
    return resultList.length
};

console.log(numSimilarGroups(["tars","rats","arts","star"]))