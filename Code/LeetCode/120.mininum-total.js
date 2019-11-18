/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let cols = triangle.length
    let dp = []
    for (let i = cols - 1; i >= 0; i--) {
        // 状态转移方程: Math.min(dp[j], dp[j+1]) + triangle[i][j]
        for (let j = 0; j <= i; j++) {
            dp[j] = (Math.min(dp[j], dp[j + 1]) || 0)  + triangle[i][j]
        }
    }
    return dp[0]
};

console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]))
