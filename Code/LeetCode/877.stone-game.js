/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let dp = []
    let start = 0
    let end = piles.length - 1
    let i = 0
    while(start <= end) {
        dp[i] = (dp[i - 2] || 0) + Math.max(piles[start], piles[end])
        if (piles[start] > piles[end]) {
            start++
        } else {
            end--
        }
    }
    return dp.pop() < dp.pop()
};