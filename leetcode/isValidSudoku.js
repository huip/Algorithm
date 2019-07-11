/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let x = ["","","","","","","","",""]
    let y = ["","","","","","","","",""]
    let grid = [["","",""],["","",""],["","",""]]
    for(let i = 0 ; i <9; i ++) {
        for(let j = 0 ; j < 9; j ++) {
            let num = board[i][j], gridx = Math.floor(i / 3), gridy = Math.floor(j / 3)
            if(board[i][j] != '.') {
                if(x[i].indexOf(num) > -1) {
                    return false
                } else {
                    x[i] += num
                }
                if(y[j].indexOf(num) > -1) {
                    return false
                } else {
                    y[j] += num
                }
                if(grid[gridx][gridy].indexOf(num) > -1) {
                    return false
                } else {
                    grid[gridx][gridy] += num
                }
            }
        }
    }
    return true
};

console.log(isValidSudoku([
    [
        "8",
        "3",
        ".",
        ".",
        "7",
        ".",
        ".",
        ".",
        "."
    ],
    [
        "6",
        ".",
        ".",
        "1",
        "9",
        "5",
        ".",
        ".",
        "."
    ],
    [
        ".",
        "9",
        "8",
        ".",
        ".",
        ".",
        ".",
        "6",
        "."
    ],
    [
        "8",
        ".",
        ".",
        ".",
        "6",
        ".",
        ".",
        ".",
        "3"
    ],
    [
        "4",
        ".",
        ".",
        "8",
        ".",
        "3",
        ".",
        ".",
        "1"
    ],
    [
        "7",
        ".",
        ".",
        ".",
        "2",
        ".",
        ".",
        ".",
        "6"
    ],
    [
        ".",
        "6",
        ".",
        ".",
        ".",
        ".",
        "2",
        "8",
        "."
    ],
    [
        ".",
        ".",
        ".",
        "4",
        "1",
        "9",
        ".",
        ".",
        "5"
    ],
    [
        ".",
        ".",
        ".",
        ".",
        "8",
        ".",
        ".",
        "7",
        "9"
    ]
]))