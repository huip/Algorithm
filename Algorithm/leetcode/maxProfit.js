/**
 * 买卖股票的最佳时机 II
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i] < prices[i+1]) {
            profit += (prices[i+1] - prices[i])
        }
    }
    return profit
};


let input =  [7,1,5,3,6,4]


console.log(maxProfit(input))