/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {}
    let index = -1
    for (let i = 0; i < s.length; i++) {
        let item = s[i]
        if (map[item]) {
            map[item]++
        } else {
            map[item] = 1
        }
    }
    for (key in map) {
        if (map[key] == 1) {
            index = s.indexOf(key)
            break
        }
    }
    return index
};

console.log(firstUniqChar('aaaddaad'))