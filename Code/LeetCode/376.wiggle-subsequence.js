/**
 * 贪心法实现
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length < 2) {
        return nums.length
    }
    let len = nums.length
    let preDiff = nums[1] - nums[0]
    let count = preDiff != 0 ? 2 : 1
    for (let i = 2; i < len; i++) {
        let diff = nums[i] - nums[i - 1]
        if (preDiff * diff <= 0 && diff != 0) {
            count++
            preDiff = diff
        }
    }
    return  count
};


/**
 * 动态规划实现
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength2 = function (nums) {
    if (nums.length < 2) {
        return nums.length
    }
    let len = nums.length
    let up = 1
    let down = 1
    for (let i = 1; i < len; i++) {
        if (nums[i] > nums[ i - 1]) {
            up = down + 1
        } else if (nums[i] < nums[ i - 1]) {
            down = up + 1
        }
    }
    return  Math.max(up, down)
};