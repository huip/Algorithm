/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits == '') {
        return []
    }
    let set = {
        2: [
            'a', 'b', 'c'
        ],
        3: [
            'd', 'e', 'f'
        ],
        4: [
            'g', 'h', 'i'
        ],
        5: [
            'j', 'k', 'l'
        ],
        6: [
            'm', 'n', 'o'
        ],
        7: [
            'p', 'q', 'r', 's'
        ],
        8: [
            't', 'u', 'v'
        ],
        9: ['w', 'x', 'y', 'z']
    }
    let res = set[digits[0]]
    for (let i = 1; i < digits.length; i++) {
        let tempRes = []
        for (let letter of set[digits[i]]) {
            for (let r of res) {
                tempRes.push(r + letter)
            }
        }
        res = tempRes
    }
    return res
};