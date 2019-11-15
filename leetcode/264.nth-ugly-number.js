/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let res = [1]
    let p2 = 0
    let p3 = 0
    let p5 = 0
    while (n > 0) {
        let temp = Math.min(2 * res[p2], 3 * res[p3], 5 * res[p5])
        res.push(temp)
        if (res[p2] * 2 === temp) {
            p2++
        }
        if (res[p3] * 3 === temp) {
            p3++
        }
        if (res[p5] * 5 === temp) {
            p5++
        }
        n--
    }
    return res[res.length - 2]
};

console.log(nthUglyNumber(1690))