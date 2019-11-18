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
        if (h1[temp]) {
            res.push(temp)
        } else {
            h1[temp] = true
        }
    }
    return res
};

console.log(findRepeatedDnaSequences('AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'))