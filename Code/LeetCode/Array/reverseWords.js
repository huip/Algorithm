/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let sArr = s
        .split(' ')
        .filter((item) => {
            return item != ''
        })
    let temp = ''
    while (sArr.length) {
        if (temp) {
            temp += ' ' + sArr.pop()
        } else {
            temp = sArr.pop()
        }
    }
    return temp
};

let s = '  hello word! '

reverseWords(s)