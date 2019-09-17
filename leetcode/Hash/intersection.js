/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let s1 = new Set(nums1)
    let s2 = new Set()
    let intersectionNums = []
    for (let i = 0; i < nums2.length; i++) {
        if (s1.has(nums2[i]) && !s2.has(nums2[i])) {
            intersectionNums.push(nums2[i])
            s2.add(nums2[i])
        }
    }
    return intersectionNums
};