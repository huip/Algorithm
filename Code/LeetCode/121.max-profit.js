/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0
    let min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(prices[i] - min, max)
        min = Math.min(min, prices[i])
    }
    return max

};