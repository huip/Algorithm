/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
    let dp = Array(m + 1)
        .fill(0)
        .map(function (a) {
            return Array(n + 1).fill(0)
        })
    for (let i = 0; i < strs.length; i++) {
        let c0 = 0
        let c1 = 0
        for (let j = 0; j < strs[i].length; j++) {
            if (strs[i][j] === '0') {
                c0++
            }
            if (strs[i][j] === '1') {
                c1++
            }
        }
        for (let i = m; i >= c0; i--) {
            for (let j = n; j >= c1; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - c0][j - c1] + 1)
            }
        }
    }
    return dp[m][n]
};

findMaxForm([
    "10", "0001", "111001", "1", "0"
], 5, 3)