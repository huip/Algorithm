/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let n = word1.length
    let m = word2.length
    let dp = Array(n + 1)
        .fill()
        .map(() => {
            return Array(m + 1).fill('')
        })

    for (let i = 1; i <= n; i++) {
        dp[i][0] = i
    }

    for (let i = 1; i <= m; i++) {
        dp[0][i] = i
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] // 相等跳过
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1, // 插入
                    dp[i][j - 1] + 1, // 删除
                    dp[i - 1][j - 1] + 1 // 替换
                )
            }
        }
    }
    return dp[n][m]
};