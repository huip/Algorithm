/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let xLen = board.length
    let yLen = board[0].length
    let visited = Array(xLen)
        .fill()
        .map(() => {
            return Array(yLen).fill(0)
        })
    for (let i = 0; i < xLen; i++) {
        for (let j = 0; j < yLen; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) {
                    return true
                }
            }
        }
    }
    function dfs(i, j, k) {
        if (i < 0 || i >= xLen || j < 0 || j >= yLen || board[i][j] != word[k] || visited[i][j]) {
            return false
        }

        if (board[i][j] == word[k] && (word.length - 1) === k) {
            return true
        }
        visited[i][j] = 1
        let passed = dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
        visited[i][j] = 0
        return passed
    }
    return false
};

console.log(exist([
    [
        'A', 'B', 'C', 'E'
    ],
    [
        'S', 'F', 'C', 'S'
    ],
    ['A', 'D', 'E', 'E']
], 'ABCB'))