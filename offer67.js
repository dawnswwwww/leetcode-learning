/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    str = str.trim()
    let arr = str.match(/^[-+]?[0-9]+/g)
    if (!arr) return 0
    console.log(arr)
    return arr[0] > 0 ? Math.min(Math.pow(2, 31) - 1, arr[0]) : Math.max(Math.pow(-2, 31), arr[0])
};

console.log(strToInt('  42 sae12'))