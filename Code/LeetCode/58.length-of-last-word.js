/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArr = s.split(' ')
    let index = sArr.length - 1
    while(index >= 0) {
        let str = sArr[index]
        if (str.length) {
            return str.length
        }
        index--
    }
    return 0
};

console.log(lengthOfLastWord('a '))