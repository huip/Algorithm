/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let result = []
    let len = intervals.length
    if (len < 2) {
        return intervals
    }
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 0; i < len - 1; i++) {
        let left = intervals[i]
        let right = intervals[i + 1]
        if (left[1] >= right[0]) {
            intervals[i + 1] = [
                left[0], Math.max(left[1], right[1])
            ] // modify right interval
        } else {
            result.push(left)
        }
    }
    result.push(intervals[len - 1])
    return result
};
console.log(merge([
    [
        1, 4
    ],
    [
        0, 2
    ],
    [3, 5]
]))