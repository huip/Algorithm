/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let h1 = {}
    let q = []
    for (let i = 0; i < list1.length; i++) {
        h1[list1[i]] = i + 1
    }
    let hashCount = Infinity
    for (let j = 0; j < list2.length; j++) {
        let l2j = list2[j]
        if (h1[l2j] && hashCount >= ((h1[l2j] + j))) {
            q.push({
                indexCount: h1[l2j] + j,
                val: l2j
            })
            hashCount = h1[l2j] + j
            for (let k = 0; k < q.length; k++) {
                if (q[k].indexCount > hashCount) {
                    q.shift()
                }
            }
        }
    }
    return q.map((item) => {
        return item.val
    })
};