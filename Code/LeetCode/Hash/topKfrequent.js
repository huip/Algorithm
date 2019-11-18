var topKFrequent = function (nums, k) {
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]]) {
            hash[nums[i]]++
        } else {
            hash[nums[i]] = 1
        }
    }
    let arr = []
    let res = []
    for (let key in hash) {
        if (!arr[hash[key]]) {
            arr[hash[key]] = [+key]
        } else {
            arr[hash[key]].push(+key)
        }
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] && res.length < k) {
            res = [
                ...res,
                ...arr[j]
            ]
        }
    }
    return res
};

console.log(topKFrequent([
    1,
    2
], 2))