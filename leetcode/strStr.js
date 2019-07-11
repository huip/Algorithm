/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    let count = 0
    let index = -1
    if (!needle.length) {
        return 0
    }
    if (needle.length > haystack.length) {
        return -1
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[count]) {
            count++
        } else {
            i -= count
            count = 0
        }
        
        if (count == needle.length) {
            index = (i - needle.length) + 1
            break
        }
    }
    return index
};

console.log(strStr("hello", "lo"))