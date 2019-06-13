/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0
    let mapSet = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
            num += -1
        } else if (s[i] == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
            num += -10
        } else if (s[i] == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) {
            num += -100
        } else {
            num += mapSet[s[i]]
        }
    }
    return num
};

console.log(romanToInt('LVIII'))