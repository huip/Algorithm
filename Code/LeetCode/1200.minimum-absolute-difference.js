var minimumAbsDifference = function (arr) {
    let newArr = arr.sort((a, b) => a - b)
    let arr2 = [], arr3 = [], result = []
    for (let i = 0; i < newArr.length; i++) {
        if (i < newArr.length - 1) {
            let compare = newArr[i + 1] - newArr[i]
            let item = { key: compare, result: [newArr[i], newArr[i + 1]] }
            arr2.push(item)
            arr3.push(compare)
        }
    }
    let min = Math.min(...arr3)
    for (let index in arr2) {
        if (arr2[index].key == min) {
            result.push(arr2[index].result)
        }
    }
    return result
};