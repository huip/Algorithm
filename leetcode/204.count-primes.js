/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let count = 0
    let notPrime = []
    for (let i = 2; i < n; i++) {
        if (!notPrime[i]) {
            count++ 
            for (let j = 2; j * i < n; j++) {
                notPrime[j * i] = true
            }
        }
    }
    return count
}