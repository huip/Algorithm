/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    let deadSet = new Set(deadends)
    let visited = {}
    let q = []
    let depth = 0
    if (deadSet.has(target) || deadSet.has('0000')) {
        return -1
    }
    q.push('0000')
    while (q.length) {
        let size = q.length
        while (size--) {
            let currStr = q.shift()
            if (currStr === target) {
                return depth
            }
            for (let i = 0; i < currStr.length; i++) {
                let temp1 = currStr.split('')
                let temp2 = currStr.split('')
                temp1[i] = currStr[i] == '9'
                    ? '0'
                    : (+ currStr[i]) + 1
                temp2[i] = currStr[i] == '0'
                    ? '9'
                    : (+ currStr[i]) - 1
                temp1 = temp1.join('')
                temp2 = temp2.join('')
                if (!visited[temp1] && !deadSet.has(temp1)) {
                    visited[temp1] = true
                    q.push(temp1)
                }
                if (!visited[temp2] && !deadSet.has(temp2)) {
                    visited[temp2] = true
                    q.push(temp2)
                }
            }
        }
        depth++
    }
    return -1
};

console.log(openLock([
    '0000'
], '8888'))