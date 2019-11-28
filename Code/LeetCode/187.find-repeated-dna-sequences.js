/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
    let h1 = {}
    if (s.length < 10) {
        return []
    }
    let res = []
    for (let i = 0; i < s.length - 9; i++) {
        let temp = s.substring(i, i + 10)
        h1[temp] = h1[temp] ? h1[temp] + 1 : 1
    }
    for (let key in h1) {
        if (h1[key] > 1) {
            res.push(key)
        }
    }
    return res
};

console.log(findRepeatedDnaSequences('AAAAAAAAAAAAA'))