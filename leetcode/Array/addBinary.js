/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let answer = ''
    let ca = 0
    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        let sum = ca
        sum += i >= 0
            ? + a[i]
            : 0
        sum += j >= 0
            ? + b[j]
            : 0
        answer += sum % 2
        ca = Math.floor(sum / 2)
    }
    answer += ca == 1
        ? ca
        : ''
    return answer
        .split('')
        .reverse()
        .join('')
};

console.log(addBinary('11', '1'))