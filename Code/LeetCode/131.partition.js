/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []
    let len = s.length
    if (!len) {
        return res
    }
    let p = []
    function helper(start, path) {
        if (start == s.length) {
            res.push([...path])
        }
        for (let i = start + 1; i <= s.length; i++) {
            let target = s.substring(start, i)
            if (target === target.split('').reverse().join('')) {
                path.push(target)
                helper(i, path)
                path.pop()
            }
        }
    }
    helper(0, p)
    return res
};

partition('aab')