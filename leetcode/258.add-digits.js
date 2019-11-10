/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let nums = ('' + num).split('')
    while(nums.length > 1) {
        let temp = []
        let sum = 0
        while(nums.length) {
            sum += (+nums.pop())
        }
        nums = ('' + sum).split('')
    }

    return (+nums.join(''))
};

console.log(addDigits(28))