/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let arr = []

    if (numRows === 0) {
        return arr
    }

    for (let i = 0; i < numRows; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j == i ) {
                row.push(1)
            } else {
                row.push(arr[i - 1][j - 1] + arr[i - 1][j])
            }
        }
        arr.push(row)
    }
    
    return arr

};

console.log(generate(5))