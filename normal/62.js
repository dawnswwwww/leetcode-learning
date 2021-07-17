var uniquePaths = function(m, n) {
    let a = Math.min(m, n)
    let F = 1
    let f = 1
    let l = a - 1
    let s = m + n - 2
    for (i = 0; i < a - 1; i++) {
        F *= s
        s -= 1

        f *= l
        l -= 1
        console.log(F, f)
    }

    return F / f    

}
console.log('result', uniquePaths(3, 7))