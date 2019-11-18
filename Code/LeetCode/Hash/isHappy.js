/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let sum = 0
    let visited = {}
    n = n + ''
    while (sum != 1) {
        sum = 0
        for (let i = 0; i < n.length; i++) {
            num += n[i] * n[i]
        }
        n = sum + ''
        if (visited[sum]) {
            return false
        }
        visited[sum] = true
    }
};