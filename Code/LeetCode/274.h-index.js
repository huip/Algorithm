/**
 * @param {number[]} citations
 * @return {number}
 * @description 桶排序解法
 */
var hIndex = function(citations) {
    let len = citations.length
    if (!len) {
        return 0
    }
    let hash = {}
    for (let index in citations) {
        let citation = citations[index]
        if (citation >= len) {
            hash[len] = hash[len] ? hash[len] + 1 : 1
        } else {
            hash[citation] = hash[citation] ? hash[citation] + 1 : 1
        }
    }
    let cur = 0
    for (let i = len; i >= 0; i--) {
        cur += (hash[i] || 0)
        if (cur >= i) {
            return i
        }
    }
};