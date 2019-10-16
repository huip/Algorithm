/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s == '') {
        return ''
    }
    let maxStr = ''
    let length = s.length
    let maxLen = 0
    let dp = []
    for (let len = 1; len <= length; len++) {
        for (let start = 0; start < length; start++) {
            let end = start + len - 1
            if (!dp[start]) {
                dp[start] = []
            }
            if (end >= length) {
                break
            }
            dp[start][end] = (len == 1 || len == 2 || dp[start + 1][end - 1]) && (s[start] === s[end])
            if (dp[start][end] && len > maxLen) {
                maxLen = len
                maxStr = s.substring(start, end + 1)
            }
        }
    }
    return maxStr
};