/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1
    let j = num2.length - 1
    let res = []
    let carray = 0
    while (i >= 0 || j >= 0) {
        let n1 = +(i >= 0 ? num1[i] : 0)
        let n2 = +(j >= 0 ? num2[j] : 0)
        let temp = n1 + n2 + carray
        carray = Math.floor(temp / 10)
        res.push(temp % 10)
        i--
        j--
    }
    if (carray) {
        res.push(1)
    }
    return res.reverse().join('')
};