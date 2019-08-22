/**
 * @param {string} s
 * @return {boolean}
 */
// var isPalindrome = function(s) {
//     let str = s.replace(/\W/g, '').toLowerCase()
//     let str1 = [...str].reverse().join('')
//     return str == str1
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama'))

// 对撞指针法
var isPalindrome = function (s) {
    let len = s.length
    let i = 0
    let j = len - 1
    while (i < j) {
        if (!/[a-zA-Z0-9]/.test(s[i])) {
            i++
            continue
        }

        if (!/[a-zA-Z0-9]/.test(s[j])) {
            j--
            continue
        }

        if (s[i].toLowerCase() != s[j].toLowerCase()) {
            return false
        }
        i++
        j--
    }
    return true
}

console.log(isPalindrome('A man, a plan, a canal: Panama'))