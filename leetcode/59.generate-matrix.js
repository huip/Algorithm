/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let max = n * n
    let matrix = Array(n)
        .fill()
        .map(() => Array(n).fill(''))
    let top = 0
    let left = 0
    let right = n - 1
    let bottom = n - 1
    let num = 1
    while (num <= max) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++
        }
        top++ 
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++
        }
        right-- 
        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num++
        }
        bottom-- 
        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num++
        }
        left++
    }
    return matrix
};
