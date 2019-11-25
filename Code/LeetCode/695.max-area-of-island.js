/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    if (!grid.length) {
        return 0
    }
    let directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]
    let m = grid.length
    let n = grid[0].length
    let maxArea = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            maxArea = Math.max(maxArea, dfs(i, j))
        }
    }
    function dfs(x, y) {
        if (x < 0 || x > m - 1 || y < 0 || y > n - 1 || grid[x][y] == 0) {
            return 0
        }
        let area = 1
        grid[x][y] = 0
        for (let d of directions) {
            area += dfs(x + d[0], y + d[1])
        }
        return area
    }
    return maxArea
};

let area = maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]])


    console.log(area)