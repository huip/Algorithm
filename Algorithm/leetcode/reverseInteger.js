/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let pre = ''
    if (x < 0) {
        pre = '-'
    }
    x = +(pre + ((Math.abs(x) + '').replace(/\0/g, '')).split('').reverse().join(''))
    if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) -1) {
        x = 0
    }
    return x
};

console.log(reverse(-123))