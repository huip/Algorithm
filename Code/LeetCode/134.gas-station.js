/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let total = 0
    let sum = 0
    let start = 0
    // 如果能成环 gas[i] - cost[i] 
    // 必须大于0 sum 为负时重置等式并且重置start
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i]
        if (sum < 0) {
            sum = gas[i] - cost[i]
            start = i
        } else {
            sum += gas[i] - cost[i]
        }
    }
    return total >= 0
        ? start
        : -1
};