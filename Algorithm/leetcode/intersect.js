/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let shortArry = []
    let longArry = []
    let temp = []
    if (nums1.length > nums2.length) {
        shortArry = nums2
        longArry = nums1
    } else {
        shortArry = nums1
        longArry = nums2
    }

    for (let i = 0; i < shortArry.length;  i++) {
        if (longArry.indexOf(shortArry[i]) > -1) {
            temp.push(shortArry[i])
            longArry.splice(i - 1, 1)
        }
    }
    return temp
};
intersect([1,2,2,1], [2,2])