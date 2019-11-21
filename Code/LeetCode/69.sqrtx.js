var mySqrt = function (x) {
    if (x === 0) {
        return 0
    }
    let left = 1
    let right = x
    while (left < right) {
        let mid = Math.floor((right + left + 1) / 2)
        if (mid * mid > x) {
            right = mid - 1
        } else {
            left = mid
        }
    }
    return left
};