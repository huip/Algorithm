/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
    let divdenMinus = false
    let divisorMinus = false
    let max = Math.pow(2, 31)
    if (divisor < 0) {
        divdenMinus = true
    }
    if (dividend < 0) {
        divisorMinus = true
    }
    divisor = Math.abs(divisor)
    dividend = Math.abs(dividend)
    let ans = 0
    while (dividend >= divisor) {
        let count = 1
        let base = divisor
        while((dividend > (base << 1) && (base << 1) > 0)) {
            count <<= 1
            base <<= 1
        }
        ans += count
        dividend -= base
    }
    if (divdenMinus) {
        ans = -ans
    }
    if (divisorMinus) {
        ans = -ans
    }
    if (ans < 0 && ans < -max) {
        return -max
    }
    if (ans > 0 && ans > max - 1) {
        return max - 1
    }
    return ans
};

console.log(divide(2147483647, 3))