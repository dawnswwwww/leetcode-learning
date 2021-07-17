const bracket = new RegExp(/\(([0-9\+\-\*\\]|)+\)/g)

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    // 依次解析
    return s.match(bracket)
};

const s = '(1*(4+5*2)-3)+(6+8)'

console.log(calculate(s))