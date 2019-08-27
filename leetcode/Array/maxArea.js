/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max = 0
    let i = 0
    let j = height.length - 1
    while (i < j) {
        max = Math.max(max, Math.min(height[i], height[j]) * (j - i))
        if (height[i] < height[j]) {
            i++
        } else {
            j--
        }
    }
    return max
}

console.log(maxArea([0,2]))