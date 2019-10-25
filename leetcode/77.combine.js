/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []
    let p = []
    function helper(start, path) {
        if (path.length === k) {
            return res.push([...path])
        }
        for (let i = start; i <= n - (k - path.length) + 1; i++) {
            path.push(i)
            helper(i + 1, path)
            path.pop()
        }
    }
    helper(1, p)
    return res
};

combine(4, 2)