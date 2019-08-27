/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowelMap = {
        'a': 1,
        'e': 1,
        'i': 1,
        'o': 1,
        'u': 1
    }
    s = s.split('')
    let len = s.length
    let i = 0
    let j = len - 1
    while (i < j) {
        if (vowelMap[s[i].toLowerCase()]) {
            if (vowelMap[s[j].toLowerCase()]) {
                let temp = s[i]
                s[i] = s[j]
                s[j] = temp
                i++
            }
            j--
        } else {
            i++
        }
    }
    return s.join('')
}

console.log(reverseVowels('leetcode'))