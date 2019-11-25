/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    if (!M.length) {
        return 0
    }
    let m = M.length
    let n = M[0].length
    let total = 0
    let visited = []
    for (let i = 0; i < m; i++) {
        if (!visited[i]) {
            dfs(i, visited)
            total++
        }
    }
    function dfs(x, visited) {
        visited[x] = true
        for (let j = 0; j < n; j++) {
            if (M[x][j] === 1 && !visited[j]) {
                dfs(j, visited)
            }
        }
    }
    return total
};