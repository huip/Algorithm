/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let flag = true
    for (let i = digits.length - 1; i >= 0; i--) {
        if ((digits[i] + 1) > 9) {
            digits[i] = 0
        } else {
            digits[i] += 1
            flag = false
            break
        }
    }
    if (flag) {
        digits.unshift(1)
    }
    return digits
}