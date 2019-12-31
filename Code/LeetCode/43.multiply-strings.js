/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 == '0' || num2 == '0') {
        return '0'
    }
    let len1 = num1.length
    let len2 = num2.length
    let res = Array(len1 + len2).fill(0)
    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            let n1 = +num1[i]
            let n2 = +num2[j]
            let temp = n1 * n2 + res[i+j+1]
            res[i+j+1] = temp % 10
            res[i+j] += Math.floor(temp / 10)
        }
    }
    while(res.length && res[0] == 0) {
        res.shift()
    }
    return res.join('')
};

multiply('124', '2323')