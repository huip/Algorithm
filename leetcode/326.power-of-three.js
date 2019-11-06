/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let flag = true
    if (n < 3) {
       if (n == 1) {
           return flag
       } else {
           return false
       }
    }
    while (n > 3) {
        n = n / 3
        if (n % 3 != 0) {
            flag = false
            break
        }
    }
    return flag
};

console.log(isPowerOfThree(1))