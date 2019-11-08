/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    let res = []
    if (!s.length) {
        return res
    }
    dfs(0, s, [])
    function dfs(start, str, path) {
        if (start === 4 || str.length === 0) {
            if (start === 4 && str.length === 0) {
                res.push([...path].join('.'))
            }
            return
        }
        for (let i = 0; i < str.length && i <= 2; i++) {
            if (i != 0 && str[0] == 0) {
                break
            }
            let part = str.substring(0, i + 1)
            if ((+ part) <= 255) {
                path.push(part)
                dfs(start + 1, str.substring(i + 1), path)
                path.pop()
            }
        }
    }
    return res
};

restoreIpAddresses('010010')