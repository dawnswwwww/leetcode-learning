/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var licenseKeyFormatting = function(s, k) {
  let str = s.replace(/-/g, '')
  const remain = str.length % k
  return remain ? (str.substr(0, remain) + str.substr(remain).replace(new RegExp(`(.{${k}})`, 'g'), '-$1')).toUpperCase() : (str.substr(0, remain) + str.substr(remain).replace(new RegExp(`(.{${k}})`, 'g'), '-$1').substr(1)).toUpperCase() 
};

const s = '2-5g-3-J'
const k = 2

console.time();
console.log(licenseKeyFormatting(s, k))
console.timeEnd()