/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s.length) {
        return false
    }
    let dp = []
    dp[0] = true
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.indexOf(s.substring(j, i)) > -1) {
                dp[i] = true
                break
            }
            dp[i] = false
        }
    }
    return dp.pop()
};

console.log(wordBreak('leetcode', ["leet","code"]))