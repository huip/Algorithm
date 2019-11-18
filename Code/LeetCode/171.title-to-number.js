/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    let res = 0
    for (let i = s.length - 1; i >= 0; i--) {
        let code = s[i].charCodeAt() - 64
        res += Math.pow(26, s.length - 1 - i) * code
    }
    return res
};