/**
 * BFS
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let q = [n]
    let depth = 0
    let visited = {}
    while (q.length) {
        let size = q.length
        depth++ 
        while (size--) {
            let front = q.shift()
            for (let j = 1; j * j <= front; j++) {
                if (j * j === front) {
                    return depth
                }
                if (!visited[front - j * j]) {
                    q.push(front - j * j)
                    visited[front - j * j] = true
                }
            }
        }
    }
    return depth
};

console.log(numSquares(12))