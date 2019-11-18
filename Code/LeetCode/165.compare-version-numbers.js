/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map((v) => parseInt(v))
    let v2 = version2.split('.').map((v) => parseInt(v))
    let i = 0
    while(i < v1.length || i < v2.length) {
        let v1num = v1[i] || 0
        let v2num = v2[i] || 0
        if (v1num > v2num) {
            return 1
        }
        if (v1num < v2num) {
            return -1
        }
        i++
    }
    return 0
};