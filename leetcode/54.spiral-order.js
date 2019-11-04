/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let m = matrix.length
    let res = []
    if (m == 0) {
        return res
    }
    let n = matrix[0].length
    let top = 0
    let bottom = m - 1
    let left = 0
    let right = n - 1
    while(left<= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            if (matrix[left][i] != 'v') {
                res.push(matrix[left][i])
                matrix[left][i] = 'v'
            }
        }

        for (let i = top; i <= bottom; i++) {
            if (matrix[i][right] != 'v') {
                res.push(matrix[i][right])
                matrix[i][right] = 'v'
            }
        }
        for (let i = right; i >= 0; i--) {
            if (matrix[bottom][i] != 'v') {
                res.push(matrix[bottom][i])
                matrix[bottom][i] = 'v'
            }
        }
        for (let i = bottom; i >= top; i--) {
            if (matrix[i][left] != 'v') {
                res.push(matrix[i][left])
                matrix[i][left] = 'v'
            }
        }
        top++
        right--
        bottom--
        left++

    }
    return res
};

console.log(spiralOrder([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]))