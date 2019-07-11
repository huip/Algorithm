/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.nums
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    let currentIndex = this.nums.length
    let arr = Object.assign([], this.nums)
    let temp
    let randomIndex
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        console.log(randomIndex)
        currentIndex -= 1
        temp = arr[currentIndex]
        arr[currentIndex] = arr[randomIndex]
        arr[randomIndex] = temp
    }
    return arr
};



/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3])
var param_1 = obj.reset()
var param_2 = obj.shuffle()
var param_3 = obj.reset()
console.log(param_1, param_2, param_3)