/**
 * 杨辉三角
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let arr = []
    // 构建杨辉三角
    for (let i = 0; i <= rowIndex; i++) {
        arr[i] = []
        for (let j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                arr[i][j] = 1
            } else {
                arr[i][j] = arr[i - 1][j-1] + arr[i - 1][j]
            }
        }
    }
    return arr[rowIndex]
};

console.log(getRow(10))