/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1) {
        return s
    }
    let len = Math.min(s.length, numRows)
    let rows = []
    for (let i = 0; i < len; i++) {
        rows[i] = ''
    }
    let loc = 0
    let down = false
    for (let c of s) {
        rows[loc] += c
        if (loc == 0 || loc == numRows - 1) {
            down = !down
        }
        loc += down ? 1 : -1
    }
    let ans = ''
    for (let row of rows) {
        ans += row
    }
    return ans
};

convert('LEETCODEISHIRING', 3)