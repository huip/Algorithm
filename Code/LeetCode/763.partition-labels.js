/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let map = {}
    for (let i = 0; i < S.length; i++) {
        map[S[i]] = i
    }
    let result = []
    let curr = map[S[0]]
    let sum = 0
    for (let i = 0; i < S.length; i++) {
        let si = S[i]
        if (map[si] > curr) {
            curr = map[si]
        }
        if (i === curr) {
            let r = curr + 1 - sum
            result.push(r)
            sum += r
        }
    }
    return result
};

partitionLabels('ababcbacadefegdehijhklij')