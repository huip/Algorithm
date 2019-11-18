// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/**
 * 递归解法
 */
// var numDecodings = function (s) {
//     function recursion(s, start) {
//         if (s.length === start) {
//             return 1
//         }
//         if (s[start] === '0') {
//             return 0
//         }
//         let a1 = recursion(s, start + 1)
//         let a2 = 0
//         if (start < s.length - 1) {
//             if ((+s[start]) * 10 + (+s[start + 1]) <= 26) {
//                 a2 = recursion(s, start + 2)
//             }
//         }
//         return a1 + a2
//     }
//     return recursion(s, 0)
// };

var numDecodings = function (s) {
    let dp = []
    let len = s.length
    dp[len] = 1
    if (s[len - 1] != '0') {
        dp[len - 1] = 1
    }
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] == '0') {
            dp[i] = 0
            continue
        }
        let a1 = dp[i + 1]
        let a2 = 0
        if ((+ s[i]) * 10 + (+ s[i + 1]) <= 26) {
            a2 = dp[i + 2]
        }
        dp[i] = a1 + a2
    }
    return dp[0]
};

console.log(numDecodings('100'))