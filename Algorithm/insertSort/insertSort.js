
const arr = [1,4,2,6,3,9,5,14]

let temp, j
for (let i = 1; i < arr.length; i++) {
    temp = arr[i]
    j = i
    console.log('-1--')
    while (j > 0 && arr[j - 1] >= temp) {
        console.log('-2--')
        arr[j] = arr[j - 1]
        j--
    }
    console.log('-3--')
    console.log(j)
    arr[j] = temp
}
console.log(arr)