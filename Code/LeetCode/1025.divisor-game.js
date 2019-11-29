/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {
    let level = 0
    while (N > 1) {
        for (let x = 1; x < N; x++) {
            if (N % x == 0) {
                N -= x
                break
            }
        }
        level++
    }
    return level % 2 == 1
};

divisorGame(1)