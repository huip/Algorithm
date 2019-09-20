/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    swap(0, s.length - 1, s)
    function swap(start, end, s) {
        if (start >= end) {
            return
        }
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp
        swap(start + 1, end - 1, s)
    }
}
