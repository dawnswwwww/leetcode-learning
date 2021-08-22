/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
 var escapeGhosts = function(ghosts, target) {
  const [tx, ty] = target
  return !ghosts.some(([x, y]) => Math.abs(tx - x) + Math.abs(ty - y) <= Math.abs(tx) + Math.abs(ty))
};


const ghosts = [[1,0],[0,3]]
const target = [0,1]

console.time()
console.log(escapeGhosts(ghosts, target))
console.timeEnd()