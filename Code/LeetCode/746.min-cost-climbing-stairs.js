/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length
    if (!len) {
        return 0
    }
    let dp = [cost[0], cost[1]]
    for (let i = 2; i < cost.length; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
    }
    return Math.min(dp.pop(), dp.pop())
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))