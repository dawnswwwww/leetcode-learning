/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const arr1 = num1.split('').reverse()
    const arr2 = num2.split('').reverse()
    const l = Math.max(num1.length, num2.length)
    let pro = false
    for (let i = 0; i < l; i++) {
        console.log((arr1[i] || 0), (arr2[i] || 0))
        arr1[i] = +(arr1[i] || 0) + +(arr2[i] || 0) + (pro ? 1 : 0)
        // console.log(arr1[i])
        pro = false
        if (arr1[i] >= 10) {
            pro = true
            arr1[i] = arr1[i] % 10
        }
        if (i === l - 1 && pro) {
            arr1[l] = 1
        }
    }
    return arr1.reverse().join('')
};

const num1 = '141310'
const num2 = '521230'
console.log(addStrings(num1, num2))