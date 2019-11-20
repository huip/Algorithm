/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let i = s.length
    let j = t.length
    while (i > 0 && j > 0) {
        let si = s[i - 1]
        let tj = t[j - 1]
        if (si === tj) {
            i--
        }
        j--
    }
    return i === 0
};

console.log(isSubsequence('axc', 'ahbgdc'))