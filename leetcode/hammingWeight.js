/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let bs = n.toString(2)
    let total = 0
    for (let i = 0; i < bs.length; i++) {
        total += (+bs[i])
    }
    return total
};

console.log(hammingWeight(100))