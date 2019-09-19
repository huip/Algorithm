/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let hash = {}
    let sLen = s.length
    let ans = 0
    let i = 0
    let j = 0
    while(i < sLen && j < sLen) {
        if (!hash[s[j]]) {
            hash[s[j]] = true
            j++
            ans = Math.max(ans, j - i)
        } else {
            hash[s[i]] = false
            i++
        }
    }
    return ans
};

console.log(lengthOfLongestSubstring('wfwef'))