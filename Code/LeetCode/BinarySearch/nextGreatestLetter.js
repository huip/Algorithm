/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let left = 0
    let right = letters.length
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        if (letters[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    if (left < letters.length) {
        return letters[left]
    }
    return letters[0]
}