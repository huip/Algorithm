/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rows = matrix.length
    if (!rows) {
        return false
    }
    let cols = matrix[0].length
    for (let i = 0; i < rows; i++) {
        if (matrix[i][0] === target || matrix[i][cols - 1] === target) {
            return true
        }
        if (matrix[i][0] < target && matrix[i][cols - 1] > target) {
            let left = 0
            let right = cols - 1
            while (left <= right) {
                let middle = left + Math.floor((right - left) / 2)
                if (matrix[i][middle] === target) {
                    return true
                } else if (matrix[i][middle] > target) {
                    right = middle - 1
                } else {
                    left = middle + 1
                }
            }
        }
    }
    return false
};

console.log(searchMatrix([[-8,-7,-5,-3,-3,-1,1],[2,2,2,3,3,5,7],[8,9,11,11,13,15,17],[18,18,18,20,20,20,21],[23,24,26,26,26,27,27],[28,29,29,30,32,32,34]], -5))