/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/\W/g, '').toLowerCase()
    let str1 = [...str].reverse().join('')
    return str == str1
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))