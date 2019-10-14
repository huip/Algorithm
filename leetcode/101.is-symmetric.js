/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    if (!root) {
        return true
    }
    let q = [root]
    while (q.length) {
        let tempVals = []
        let tempQ = []
        while (q.length) {
            let node = q.shift()
            if (node == null) {
                tempVals.push(null)
                continue
            }
            tempVals.push(node.val)
            tempQ.push(node.left)
            tempQ.push(node.right)
        }
        if (!isPalindrome(tempVals)) {
            return false
        }
        q = tempQ
    }
    return true
    function isPalindrome(arr) {
        let left = 0
        let right = arr.length - 1
        while (left < right) {
            if (arr[left] != arr[right]) {
                return false
            }
            left++
            right--
        }
        return true
    }
};