/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
// var backspaceCompare = function(S, T) {
//     return  S.split("").reduce((p,n)=>{n==='#'?p.pop():p.push(n);return p},[]).join('')===T.split("").reduce((p,n)=>{n==='#'?p.pop():p.push(n);return p},[]).join('')
// };


var backspaceCompare = function(S, T) {
    return  S.split("").reduce((p,n)=>{n==='#'?p.pop():p.push(n);return p},[]).join('')===T.split("").reduce((p,n)=>{n==='#'?p.pop():p.push(n);return p},[]).join('')
};

let backspaceCompare = function (S, T) {
    return S.split('').reduce((p, n) => {n===# ? p.pop():p.push(n);return p},[]).join
}