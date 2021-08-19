/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
  // var strArr = [];
  let res = ''
  var n = k;
  for (var i = 0, l = s.length; i < l/n; i++) {
    var a = s.slice(n * i, n * (i+1));
    if (i % 2 === 0) a = a.split('').reverse().join('')
    // strArr.push(a); 
    res+=a
  }
  return res
  // return strArr.map((str, index) => index % 2 ? str : str.split('').reverse().join('')).join('')
};

const s = 'asfiahnckscnklsanfklanfklanf'

console.time()
console.log(reverseStr(s, 5))
console.timeEnd()