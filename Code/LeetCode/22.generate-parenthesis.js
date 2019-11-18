/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let res = []
    function backtracking(cur, left, right, max) {
        if (cur.length === max * 2) {
            return res.push(cur)
        }
        if (left < n) {
            backtracking(cur + '(', left + 1, right, max)
        }
        if (right < left) {
            backtracking(cur + ')', left, right + 1, max)
        }
    }
    backtracking('', 0, 0, n)
    return res
};