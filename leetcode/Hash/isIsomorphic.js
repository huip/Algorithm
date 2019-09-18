/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length != t.length) {
        return false
    }
    let hs = {}
    let ht = {}
    for (let i = 0; i < s.length; i++) {
        let si = s[i]
        let ti = t[i]
        if ((hs[si] && hs[si] != ti) || (ht[ti] && ht[ti] != si)) {
            return false
        }
        hs[si] = ti
        ht[ti] = si
    }
    return true
}