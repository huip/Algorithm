/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let swap = function (A, x, y) {
        [A[x], A[y]] = [A[y], A[x]]
    }
    let swapMatrix = function (A, x, y) {
        [A[x][y], A[y][x]
        ] = [A[y][x], A[x][y]
        ]
    }
    let n = matrix.length
    for (let i = 0; i < ~~ (n / 2); i++) {
        swap(matrix, i, n - 1 - i)
    }
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            swapMatrix(matrix, i, j)
        }
    }
    return matrix
};

console.log(rotate([
    [
        1, 2, 3
    ],
    [
        4, 5, 6
    ],
    [7, 8, 9]
]))