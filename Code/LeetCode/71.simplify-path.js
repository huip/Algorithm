/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let paths = path.split('/')
    let stack = []
    for (let p of paths) {
        if (p === '..') {
            if (stack.length) {
                stack.pop()
            }
        } else if (p != '.' && p) {
            stack.push(p)
        }
    }
    return '/' + stack.join('/')
};
