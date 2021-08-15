/**
 * 思路: 对前一项进行正则匹配并替换，匹配相同数字出现个数
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
  const des = ['1']
  const reg = /(\w)\1*/g
  for (let i = 1; i < n; i++) {
    des[i] = des[i - 1].replace(reg, (t, s) => t.length + s)
  }
  return des[n - 1]
};

console.time()
console.log(countAndSay(5))
console.timeEnd()