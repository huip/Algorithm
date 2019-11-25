/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) {
        return 0
    }
    let m = grid.length
    let n = grid[0].length
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    let total = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] != '0') {
                dfs(i, j)
                total++
            }
        }
    }

    function dfs(x, y) {
        if (x < 0 || x >= m || y < 0 || y >= n || grid[x][y] == '0') {
            return
        }
        grid[x][y] = '0'
        for (let d of directions) {
            dfs(x + d[0], y + d[1])
        }
    }
    return total
};

console.log(numIslands([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]]))