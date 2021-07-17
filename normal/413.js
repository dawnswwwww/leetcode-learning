var numberOfArithmeticSlices = function(A) {
    let sum  = 0
    let dp = new Array(A.length).fill(0)
    for (let i = 2; i < dp.length; i++) {
        if (A[i - 1] - A[i - 2] === A[i] - A[i - 1]) {
            dp[i] = 1 + dp[i - 1]
            sum+=dp[i]
        }
    }

    return sum
}

console.log(numberOfArithmeticSlices([1,2,3,4]))