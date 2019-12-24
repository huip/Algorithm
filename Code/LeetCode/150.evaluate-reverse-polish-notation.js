/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (let token of tokens) {
        if (token == '+') {
            stack.push(stack.pop() + stack.pop())
        } else if (token == '-') {
            stack.push(-stack.pop() + stack.pop())
        } else if (token == '*') {
            stack.push(stack.pop() * stack.pop())
        } else if (token == '/') {
            let num = stack.pop()
            stack.push(Math.trunc(stack.pop() / num))
        } else {
            stack.push(+token)
        }
    }
    return stack.pop()
};