/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let hash = {}
    let res = ''
    for (let i = 0; i < s.length; i++) {
        if (hash[s[i]]) {
            hash[s[i]] += 1
        } else {
            hash[s[i]] = 1
        }
    }
    for (let i = 0; i < t.length; i++) {
        let c = t[i]
        if (!hash[c]) {
            res += c
        } else {
            hash[c] -= 1
        }
    }
    return res
};

console.log(findTheDifference('a', 'aa'))