/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {

    if (board === null || !board.length) {
        return
    }

    let m = board.length
    let n = board[0].length

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let isEdge = (i === 0) || (j === 0) || (i === m - 1) || (j === n - 1)
            if (isEdge && board[i][j] === 'O') {
                dfs(board, i, j)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }
            if (board[i][j] === '#') {
                board[i][j] = 'O'
            }
        }
    }

    function dfs(board, i, j) {
        if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || board[i][j] === 'X' || board[i][j] === '#') {
            return
        }
        board[i][j] = '#'
        dfs(board, i + 1, j) // 向下
        dfs(board, i - 1, j) // 向上
        dfs(board, i, j + 1) // 向右
        dfs(board, i, j - 1) // 向左
    }
};

solve([
    [
        'X', 'X', 'X', 'X'
    ],
    [
        'X', 'O', 'O', 'X'
    ],
    [
        'O', 'X', 'O', 'X'
    ],
    ['X', 'O', 'X', 'X']
])