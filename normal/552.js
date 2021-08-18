/**
 * @param {number} n
 * @return {number}
 */
 var checkRecord = function(n) {
  // all P 
  // 1 无缺勤 0迟到
  // 2 无缺勤 1迟到
  // 3 无缺勤 2迟到
  // 4 1缺勤 0迟到
  // 5 1缺勤 1迟到
  // 6 1缺勤 2迟到
  return (1 
  + compute(n, 1) 
  + compute(n, 2) 
  + compute(n, 1) 
  + (compute(n, 1) * compute(n - 1, 1))
  + compute(n, 2) * compute(n - 2, 1)) % (10e9 + 7)
};

const compute = (total, range) => {
const res = Array.from({length: range}).map((i, index) => total - index).reduce((t, s) => t * s, 1) / range
return res
}

console.time()
console.log(checkRecord(4))
console.timeEnd()