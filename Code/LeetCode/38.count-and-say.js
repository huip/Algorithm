/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n === 1) {
        return '1'
    }
    let str = countAndSay(n - 1)
    let temp = str[0]
    let count = 0
    let ans = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === temp) {
            count++
        } else {
            ans += '' + count + temp
            temp = str[i]
            count = 1
        }
        if (i === str.length - 1) {
            ans += '' + count + temp
        }
    }
    return ans
};