/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    this.nums[i] = val
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let sum = 0
    for (i; i <= j; i++) {
        sum += this.nums[i]
    }
    return sum
};