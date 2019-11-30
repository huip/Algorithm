/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let map = {}
    for (let i = 0; i < A.length; i++) {
        map[A[i]] = map[A[i]] ? map[A[i]] + 1 : 1
        if (map[A[i]] >= A.length / 2) {
            return A[i]
        }
    }
};