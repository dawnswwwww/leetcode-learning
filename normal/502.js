/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
 var findMaximizedCapital = function(k, w, profits, capital) {
  const n = profits.length
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (profits[i] < profits[j]) [profits[i], profits[j]] = [profits[j], profits[i]]
  console.log(profits)
}; 

const k = 2
const w = 0
const profits = [1,2,3]
const capital = [0,1,1]

console.time()
console.log(findMaximizedCapital(k, w, profits, capital))
console.timeEnd()