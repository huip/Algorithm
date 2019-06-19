/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let mapping = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (mapping[s[i]]) {
            let topElement = stack.pop() || ''
            if (topElement != mapping[s[i]]) {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }

    return stack.length === 0
};

console.log(isValid("([])"))