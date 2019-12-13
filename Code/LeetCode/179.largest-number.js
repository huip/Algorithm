/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String).sort((a, b) => {
        return b.concat(a) - a.concat(b)
    })
    return nums.join('').replace(/^0+/, '') || '0'
};

largestNumber([0, 3,30,34,5,9])