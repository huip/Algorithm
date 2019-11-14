/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let len = citations.length
    let left = 0
    let right = len - 1
    if (len === 0 || citations[right] === 0) {
        return 0
    }
    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (citations[mid] <= len - mid) {
            left = mid +1
        } else {
            right = mid
        }
    }
    return len - left
};

console.log(hIndex([1]))