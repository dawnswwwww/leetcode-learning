/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// var compareVersion = function(version1, version2) {
//     const v1 = version1.split('.')
//     const v2 = version2.split('.')
//     const maxLength = Math.max(v1.length, v2.length)
//     for (let i = 0; i < maxLength; i++) {
//       const ver1 = (v1[i] ?? '').replace(/^[0]+/, '') || '0'
//       const ver2 = (v2[i] ?? '').replace(/^[0]+/, '') || '0'
//       if (ver1 === ver2) continue
//       return ver1 - ver2 > 0 ? 1 : -1
//     }
//     return 0
// };


var compareVersion = function(version1, version2) {
  const v1 = version1.split('.')
  const v2 = version2.split('.')
  const maxLength = Math.max(v1.length, v2.length)
  for (let i = 0; i < maxLength; i++) {
    const ver1 = parseInt((v1[i] ?? ''), 10) || 0
    const ver2 = parseInt((v2[i] ?? ''), 10) || 0
    if (ver1 === ver2) continue
    return ver1 - ver2 > 0 ? 1 : -1
  }
  return 0
};


const version1 = "1.2"
const version2 = "1.10"

console.time()
console.log(compareVersion(version1, version2))
console.timeEnd()