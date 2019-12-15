/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!hash[num]) {
            hash[num] = [i]
        } else {
            hash[num].push(i)
        }
    }
    this.hash = hash
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let targets = this.hash[target]
    return targets[Math.floor(targets.length * Math.random())]
};