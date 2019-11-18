/**
 * BFS and queue
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsBFS = function (grid) {
    if (!grid.length) {
        return 0
    }
    let nRow = grid.length
    let nCol = grid[0].length
    let visited = Array(nRow + 1)
        .fill(false)
        .map(x => Array(nCol + 1).fill(false))
    let count = 0
    for (let i = 0; i < nRow; i++) {
        for (let j = 0; j < nCol; j++) {
            if (grid[i][j] == '1' && !visited[i][j]) {
                count++ 
                bfs(grid, visited, i, j)
            }
        }
    }
    function bfs(grid, visited, x, y) {
        if (x >= 0 && x < nRow && y >= 0 && y < nCol) {
            if (grid[x][y] == '1' && !visited[x][y]) {
                visited[x][y] = true
                let q = []
                q.push([x,y])
                while (q.length) {
                    let [curX,
                        curY] = q.shift()
                    qPush(grid, visited, q, curX + 1, curY)
                    qPush(grid, visited, q, curX - 1, curY)
                    qPush(grid, visited, q, curX, curY + 1)
                    qPush(grid, visited, q, curX, curY - 1)
                }
            }
        }
    }

    function qPush(grid, visited, q, x, y) {
        if (x >= 0 && x < nRow && y >= 0 && y < nCol) {
            if (grid[x][y] == '1' && !visited[x][y]) {
                visited[x][y] = true
                q.push([x, y])
            }
        }
    }
    return count
};

/**
 * DFS
 * @param {character[][]} grid
 * @return {number}
 */
function numIslandsDFS(grid) {
    if (!grid.length) {
        return 0
    }
    let count = 0
    let nRow = grid.length
    let nCol = grid[0].length
    for (let i = 0; i < nRow; i++) {
        for (let j = 0; j < nCol; j++) {
            if (grid[i][j] == '1') {
                count++
                dfs(grid, i, j)
            }
        }
    }
    function dfs(grid, i, j) {
        if (i >= 0 && i < nRow && j >= 0 && j < nCol) {
            if (grid[i][j] == '1') {
                grid[i][j] = 0
                dfs(grid, i - 1, j)
                dfs(grid, i + 1, j)
                dfs(grid, i, j - 1)
                dfs(grid, i, j + 1)
            }
        }
    }
    return count
}

let count = numIslandsDFS([
    [
        1, 1, 0,0, 0
    ],
    [
        1, 1, 0, 0, 0
    ],
    [
        0, 0, 1, 0, 0
    ],
    [0, 0, 0, 1, 1]
])

console.log(count)