/**
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
  if (s.replace(/[^A]/g, '').length > 1) return false
  if (/[L]{3,}/g.test(s)) return false
  return true  
};


const s = "PPALLP"


console.time()
console.log(checkRecord(s))
console.timeEnd()