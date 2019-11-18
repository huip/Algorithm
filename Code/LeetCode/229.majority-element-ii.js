/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let mCount = nums.length / 3
    let hash = {}
    let res = []
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (hash[num]) {
            hash[num]++
        } else {
            hash[num] = 1
        }
    }
    for (let key in hash) {
        if (hash[key] > mCount) {
            res.push(+key)
        }
    }
    return res
};

majorityElement([2,2])