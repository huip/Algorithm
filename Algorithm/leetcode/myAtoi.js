/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim() + ''
    let fc = str[0]
    let number = ''
    let operatorArr = ['+', '-']
    if (!/^\d+$/.test(fc) && fc != '-' && fc != '+') {
        return 0
    }
    if (str.length == 1 && (fc == '-' || fc == '+')) {
        return 0
    }
    let sc = str[1]
    if (operatorArr.indexOf(fc) > -1 && operatorArr.indexOf(sc) > -1) {
        return 0
    }
    for (let i = 1; i < str.length; i++) {
        if (!/^\d+$/.test(str[i])) {
            break
        }
        number += str[i]
    }
    number = +(fc + number)
    if (number < Math.pow(-2, 31)) {
        number = Math.pow(-2, 31)
    }

    if (number > Math.pow(2, 31) -1) {
        number = Math.pow(2, 31) - 1
    }
    
    return !isNaN(number) ? number : 0
};
console.log(myAtoi("42"))