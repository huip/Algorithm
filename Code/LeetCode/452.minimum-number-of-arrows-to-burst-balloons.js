/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if (!points.length) {
        return 0
    }
    points.sort((a, b) => {
        return a[1] - b[1]
    })
    let i = 1
    let count = 1
    let preMax = points[0][1]
    while(i < points.length) {
        if (points[i][0] > preMax || points[i][1] < preMax ) {
            preMax = points[i][1]
            count++
        }
        i++
    }
    return count
};

findMinArrowShots([[1,2],[2,3],[3,4],[4,5]])