/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0
        let right = n
        mid = left + Math.floor((right - left) / 2)
        while (left < right) {
            if (isBadVersion(mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}