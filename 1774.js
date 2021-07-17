/**
 * @param {number[]} baseCosts
 * @param {number[]} toppingCosts
 * @param {number} target
 * @return {number}
 */
var closestCost = function(baseCosts, toppingCosts, target) {
    const reachArr = baseCosts.filter(i => i >= target)
    // if (reachArr.length) return Math.min(...reachArr)
    const result = new Set()
    const n = baseCosts.length
    
    for (let i = 0; i < n; i++) {
      toppingCosts.reduce((t, b) => {
        let next =  t + b
        if (next >= target) result.add(next)
        return next
      }, baseCosts[i])
      toppingCosts.reduce((t, b) => {
        let next =  t + 2 * b
        if (next >= target) result.add(next)
        return next
      }, baseCosts[i])
    }
  console.log(result)
  return Math.min(...result) 
};

const baseCosts = [2,3]
const toppingCosts = [3,4]
const target = 10

console.log(closestCost(baseCosts, toppingCosts, target))