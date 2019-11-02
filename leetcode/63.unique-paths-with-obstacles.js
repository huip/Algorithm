/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    let rows = obstacleGrid[0].length
    let cols = obstacleGrid.length
    let steps = Array(cols)
        .fill()
        .map(() => {
            return Array(rows).fill('')
        })
    if (obstacleGrid[0][0] === 1) {
        return 0
    }
    if (cols === 1 || rows === 1) {
        if (obstacleGrid[cols - 1][rows - 1] == 1) {
            return 0
        }
        return 1
    }
    steps[0][0] = 1
    for (let i = 1; i < rows; i++) {
        steps[0][i] = obstacleGrid[0][i] === 0
            ? steps[0][i - 1]
            : 0
    }
    for (let j = 1; j < cols; j++) {
        steps[j][0] = obstacleGrid[j][0] === 0
            ? steps[j - 1][0]
            : 0
    }
    for (let i = 1; i < cols; i++) {
        for (let j = 1; j < rows; j++) {
            if (obstacleGrid[i][j] === 1) {
                steps[i][j] = 0
            } else {
                steps[i][j] = steps[i - 1][j] + steps[i][j - 1]
            }
        }
    }
    return steps[cols - 1][rows - 1]
};

console.log(uniquePathsWithObstacles([[0]]))