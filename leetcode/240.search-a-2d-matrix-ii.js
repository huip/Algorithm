/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let cols = matrix.length
    if (!cols) {
        return false
    }
    let rows = matrix[0].length
    let x = 0
    let y = 0
    if (matrix[x][y] > target) {
        return false
    }
    while (y < cols) {
        while (x < rows) {
            if (matrix[y][x] === target) {
                return true
            }
            x++
        }
        y++
        x = 0
    }
    return false
};

console.log(searchMatrix([[1,1]], 2))