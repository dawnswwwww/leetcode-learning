var maxProfit = function(prices) {
    const n = prices.length;
    let dp0 = 0, dp1 = -prices[0];
    for (let i = 1; i < n; ++i) {
        // let newDp0 = Math.max(dp0, dp1 + prices[i]);
        // let newDp1 = Math.max(dp1, dp0 - prices[i]);
        // dp0 = newDp0;
        // dp1 = newDp1;
        dp0 = Math.max(dp0, dp1 + prices[i]);
        dp1 = Math.max(dp1, dp0 - prices[i]);
    }
    return dp0;
};

var maxProfit = function(prices) {
    let ans = 0;
    let n = prices.length;
    for (let i = 1; i < n; ++i) {
        ans += Math.max(0, prices[i] - prices[i - 1]);
    }
    return ans;
};



const ex = [7,1,5,3,6,4]
console.log(maxProfit(ex))