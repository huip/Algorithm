/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num == 1) {
        return true
    }
    let m = 1
    while (m < num) {
        m = m * 4
        if (m === num) {
            return true
        }
    }
    return false
};