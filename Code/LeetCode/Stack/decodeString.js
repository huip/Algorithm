/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let numStack = []
    let strStack = []
    let num = 0
    let str = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            num = +(num * 10 + s[i])
        } else if (s[i] === '[') {
            numStack.push(num)
            strStack.push(str)
            num = 0
            str = ''
        } else if (s[i] === ']') {
            let count = numStack.pop()
            while (count > 0) {
                strStack[strStack.length - 1] += str
                count--
            }
            str = strStack.pop()
        } else {
            str += s[i]
        }
    }
    return str
};

let s = "3[a2[c]]"

decodeString(s)