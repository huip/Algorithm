/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if (!nums.length) {
        return nums
    }
    let res = []
    let i = 0
    while (i < nums.length) {
        let pre = nums[i]
        let last = pre
        while (nums[i + 1] === (last + 1)) {
            last = nums[i + 1]
            i++ 
        }
        if (last != pre) {
            res.push(`${pre}->${last}`)
        } else {
            res.push(`${pre}`)
        }
        i++ 
        last = pre
    }
    return res
};