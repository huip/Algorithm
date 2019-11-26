
/**
 * @param {number} n
 * @return {number}
 */
let cache = {}
var climbStairs = function (n) {
    if (n <= 0) {
        return -1
    }
    if (n <= 2) {
        return n
    }
    let preStep,
        preNextStep
    if (cache[n - 1]) {
        preStep = cache[n - 1]
    } else {
        preStep = climbStairs(n - 1)
        cache[n - 1] = preStep
    }
    if (cache[n - 2]) {
        preNextStep = cache[n - 2]
        cache[n - 1] = preStep
    } else {
        preNextStep = climbStairs(n - 2)
        cache[n - 2] = preNextStep
    }
    return preStep + preNextStep
};