/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    // 注意边界 i === 0和 i === flowerbed.length - 1
    for (let i = 0; i < flowerbed.length - 1; i++) {
        if ((i === 0 || flowerbed[i - 1] === 0) && (i == flowerbed.length - 1 || flowerbed[i + 1] === 0) && flowerbed[i] === 0) {
            count++ 
            flowerbed[i] = 1
        }
    }
    return count >= n
};

canPlaceFlowers([0,0,1,0,1], 0)