/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = [0]
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 1) {
            result[i] = result[i - 1] + 1
        } else {
            result[i] = result[i/2]
        }
    }
    return result
};
countBits(5)