/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let res = []
    function helper(start, sum, begin, path) {
        if (start === 0) {
            if (sum === 0) {
                res.push([...path])
            }
            return
        }
        for (let i = begin; i < 10; i++) {
            path.push(i)
            helper(start - 1, sum - i, i + 1, path)
            path.pop()
        }
    }
    helper(k, n, 1, [])
    return res
};

combinationSum3(3, 9)