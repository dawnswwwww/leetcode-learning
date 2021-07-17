/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let arr = s.match(/[a-zA-Z0-9]/g)
    if (!arr) return true
    arr = arr.map(item => item.toLowerCase())
    console.log(arr)
    return arr.join('') === arr.reverse().join('')
};

console.log(isPalindrome("0P"))