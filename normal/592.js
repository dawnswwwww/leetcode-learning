/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    expression
    let arr = expression.match(/[+-]?[0-9]\/[0-9]/g)
    let res = {type: 'plus', m: '1', s: '0'}
    let deal = arr.map((item, index) => {
        return item.startsWith('-') ? {type: 'minus', m: item.substr(-1), s: item.substr(-3,1)} : {type: 'plus', m: item.substr(-1), s: item.substr(-3,1)} 
    })
    deal.forEach(item => {
        let g = gcd(item.m, res.m)
        let rs = res.s * (g / res.m)
        let is = item.s * (g / item.m)
        res.m = g
        if (item.type === 'minus') {
            res.s = rs-is
        } else {
            res.s = rs+is
        }
    })
    console.log(deal)
    let result
    if (res.s % res.m === 0) {
        result = `${res.s / res.m}/1`
        return res.s >= 0 ? result : '-' + result
    } else {
        result = `${res.s}/${res.m}`
        return res.s >= 0 ? result : '-' + result
    }
    return 
};

var gcd = function (x, y) {
    return y==0?x:gcd(y, x%y);
}

console.time()
console.log(fractionAddition("1/3-1/2"))
console.timeEnd()