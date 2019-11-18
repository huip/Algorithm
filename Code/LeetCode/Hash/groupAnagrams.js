/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {}
    let res = []
    for (let i = 0; i < strs.length; i++) {
        let word = strs[i]
        let str = word
            .split('')
            .sort()
            .join('')
        if (!map[str]) {
            map[str] = [word]
        } else {
            map[str].push(word)
        }
    }
    for (let key in map) {
        res.push(map[key])
    }
    return res
};