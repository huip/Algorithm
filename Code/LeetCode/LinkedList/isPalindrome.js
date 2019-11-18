/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let reversedList = reverse(head)
    let curr = head
    let rCurr = reversedList
    while (curr) {
        if (curr.val != rCurr.val) {
            return false
        }
        curr = curr.next
        rCurr = rCurr.next
    }
    return true
}

var reverse = function (head) {
    if (!head) {
        return head
    }
    let curr = head
    let tempNode = {
        val: head.val,
        next: null
    }
    while (curr.next) {
        curr = curr.next
        tempNode = {
            val: curr.val,
            next: tempNode
        }
    }
    return tempNode
}