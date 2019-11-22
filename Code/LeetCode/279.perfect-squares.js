/**
 * @param {number} n
 * @return {number}
 * @description 广度优先算法的层次刚好复合最短路径问题
 */
var numSquares = function(n) {
    let q = [n]
    let visited = {}
    let step = 0
    while(q.length) {
        let tempQ = []
        step++
        while(q.length) {
            let curr = q.pop()
            for (let i = 1; i * i <= n; i++) {
                let next = curr - i * i
                if (next === 0) {
                    return step
                }
                if (next < 0) {
                    break
                }
                // 如果值已经访问过，就不再遍历
                if (visited[next]) {
                    continue
                }
                visited[next] = true
                tempQ.push(next)
            }
        }
        q = tempQ
    }
    return step
};