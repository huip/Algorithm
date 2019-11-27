/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if (!pairs.length) {
        return 0
    }
    let len = pairs.length
    pairs.sort((a, b) => a[0] - b[0])
    let dp = Array(len).fill(1)
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[j][1] < pairs[i][0]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return dp.pop()
};

findLongestChain([[1,2], [2,3], [3,4]])