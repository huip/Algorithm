/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let visited = {}
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0 && !visited[i + '-' + j]) {
                let x = 0
                let y = 0
                visited[i + '-' + j] = true
                while (x < rows) {
                    if (matrix[x][j] != 0) {
                        matrix[x][j] = 0
                        visited[x + '-' + j] = true
                    }
                    x++
                }
                while (y < cols) {
                    if (matrix[i][y] != 0) {
                        matrix[i][y] = 0
                        visited[i + '-' + y] = true
                    }
                    y++
                }
            }
        }
    }
    return matrix
};

setZeroes([
    [
        1, 1, 1
    ],
    [
        1, 0, 1
    ],
    [1, 1, 1]
])