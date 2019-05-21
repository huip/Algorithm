/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let flag = true
    if (s.length != t.length) {
        flag = false
        return flag
    }
    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (map[t[j]]) {
            map[t[j]] -= 1
        } else {
            map[t[j]]--
        }
    }

    for (let key in map) {
        if (map[key] != 0) {
            flag = false
            break
        }
    }
    return flag
};

console.log(isAnagram("aacc", "ccac"))