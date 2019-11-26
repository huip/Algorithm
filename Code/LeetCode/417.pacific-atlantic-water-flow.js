/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    if (!matrix.length) {
        return []
    }
    let res = []
    let m = matrix.length
    let n = matrix[0].length
    let directions = [[-1, 0], [1, 0], [0,-1], [0, 1]]
    let canReachP = Array(m).fill().map(() => {
        return Array(n).fill(0)
    })

    let canReachA = Array(m).fill().map(() => {
        return Array(n).fill(0)
    })
    
    for (let i = 0; i < m; i++) {
        dfs(i, 0, canReachP)
        dfs(i, n - 1, canReachA)
    }

    for (let i = 0; i < n; i++) {
        dfs(0, i, canReachP)
        dfs(m - 1 , i, canReachA)
    }

    function dfs(x, y, canReach) {
        if (canReach[x][y]) {
            return
        }
        canReach[x][y] = true
        for (let d of directions) {
            let nextX = x + d[0]
            let nextY = y + d[1]
            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && matrix[nextX][nextY] >= matrix[x][y]) {
                dfs(nextX, nextY, canReach)
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (canReachA[i][j] && canReachP[i][j]) {
                res.push([i,j])
            }
        }
    }
    return res
};

pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]])