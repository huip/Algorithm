/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    function paitition(str) {
        let result = []
        if (str.indexOf('+') === -1 && str.indexOf('-') === -1 && str.indexOf('*') === - 1) {
            result.push(+str)
            return result
        }
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '+' || str[i] === '-' || str[i] === '*') {
                for (let left of paitition(str.substring(0, i))) {
                    for (let right of paitition(str.substring(i+1))) {
                        if (str[i] === '+') {
                            result.push((+left) + (+right))
                        }
                        if (str[i] === '-') {
                            result.push((+left) - (+right))
                        }
                        if (str[i] === '*') {
                            result.push((+left) - (+right))
                        }
                    }
                }
            }
        }
        return result
    }
    return paitition(input)
};

console.log(diffWaysToCompute('2-1-1'))