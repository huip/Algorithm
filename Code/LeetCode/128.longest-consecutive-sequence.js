/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let hash = {}
    let maxLength = 0
    for (let num of nums) {
        if (!hash[num]) {
            let left = hash[num - 1] || 0
            let right = hash[num + 1] || 0
            let currentLength = left + right + 1
            if (currentLength > maxLength) {
                maxLength = currentLength
            }
            hash[num] = currentLength
            hash[num - left] = currentLength
            hash[num + right] = currentLength
        }
    }
    return maxLength
};

longestConsecutive([100, 4, 200, 1, 3, 2])