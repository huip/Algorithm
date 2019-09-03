


/**
 * 解法一 暴力破解法
 * @param {number[]} T
 * @return {number[]}
 */
// var dailyTemperatures = function (T) {
//     let i = 0
//     let _T = []
//     while (i < T.length) {
//         for (let j = i; j < T.length; j++) {
//             _T[i] = 0
//             if (T[i] < T[j]) {
//                 _T[i] = j - i
//                 break
//             }
//         }
//         i++
//     }
//     return _T
// };

/**
 * 解法二 栈
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = []
    let _T = []
    for (let i = 0; i < T.length; i++) {
        _T[i] = 0
        while(stack.length && T[i] > T[stack[stack.length - 1]]) {
            let j = stack.pop()
            _T[j] = i - j
        } 
        stack.push(i)
    }
    return _T
}
let temperatures = [
    73,
    74,
    75,
    71,
    69,
    72,
    76,
    73
]
dailyTemperatures(temperatures)