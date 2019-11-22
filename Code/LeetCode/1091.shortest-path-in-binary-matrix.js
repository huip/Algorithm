/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if (grid[0][0]) {
        return -1
    }
    let q = [[0, 0]]
    let directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]]
    let N = grid.length
    const isValidCoord = (x, y) => x >= 0 && x < N && y >= 0 && y < N
    grid[0][0] = 1
    let dist = 1
    while(q.length) {
        let tempQ = []
        while(q.length) {
            let [x, y] = q.shift()
            if (x === N - 1 && y === N - 1) {
                return dist
            }
            for (let [moveX, moveY] of directions) {
                let nextX = moveX + x
                let nextY = moveY + y
                if (isValidCoord(nextX, nextY) && grid[nextX][nextY] === 0) {
                    tempQ.push([nextX, nextY])
                    grid[nextX][nextY] = 1
                }
            }
        }
        dist++
        q = tempQ
    }
    return -1
};