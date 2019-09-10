/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let sArr = s.split(' ')
    let str = ''
    for (let i = 0; i < sArr.length; i++) {
        let tempStr = sArr[i]
        for (let j = tempStr.length - 1; j >= 0; j--) {
            str += (tempStr[j])
            if (j == 0 && i < sArr.length - 1) {
                str += ' '
            }
        }
    }
    return str
};

let s = "Let's take LeetCode contest"

reverseWords(s)