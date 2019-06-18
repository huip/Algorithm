/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let contains = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (contains[num]) {
            delete contains[num]
        } else {
            contains[num] = true
        }
    }

    return Object.keys(contains)[0]
    
};

console.log(singleNumber([2,2,1]))