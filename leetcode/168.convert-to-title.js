/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    let letter = 'ZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let res = ''
    while ((n / 26) > 1) {
        let mod = n % 26
        res = letter[mod] + res
        n = (n - (mod === 0
            ? 26
            : mod)) / 26
    }
    return letter[n] + res
};