/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  const target = Math.sqrt(num)
  return target === ~~target
};