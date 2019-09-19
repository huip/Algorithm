/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    let hash = new Set(J)
    let num = 0
    for (let i = 0; i < S.length; i++) {
        if (hash.has(S[i])) {
            num++
        }
    }
    return num
};