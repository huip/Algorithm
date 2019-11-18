/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    let hash1 = {}
    let hash2 = {}
    let strArr = str.split(' ')
    if (pattern.length != strArr.length) {
        return false
    }
    for (let i = 0; i < strArr.length; i++) {
        if (!hash1[pattern[i]]) {
            hash1[pattern[i]] = strArr[i]
        }

        if (!hash2[strArr[i]]) {
            hash2[strArr[i]] = pattern[i]
        }

        if (hash1[pattern[i]] != strArr[i]
            || hash2[strArr[i]] != pattern[i]) {
            return false
        }
    }
    return true
};