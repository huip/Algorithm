
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    if (!matrix.length) {
        return 0
    }
    let cols = matrix.length
    let rows = matrix[0].length
    let dp = Array(cols + 1).fill().map(() => {
        return Array(rows + 1).fill(0)
    })
    let maxSquare = 0
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (matrix[i][j] === '1') {
                dp[i + 1][j + 1] = Math.min(dp[i + 1][j], dp[i ][j+1], dp[i][j]) + 1
                maxSquare = Math.max(maxSquare, Math.pow(dp[i + 1][j + 1], 2))
            }
        }
    }
    return maxSquare
};