/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let total = 0
    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            total += 1
        }
    }
    function isPrime(v) {
        if (v <= 3) {
            return v > 1
        }
        if (v % 2 == 0 || v % 3 == 0) {
            return false
        }

        for (let i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    return total
};

console.log(countPrimes(101))