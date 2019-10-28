/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    if (!head) {
        return null
    }
    let listNode = {}
    listNode.next = head
    let fast = listNode.next
    let slow = listNode
    while (fast) {
        if (fast.next && fast.val === fast.next.val) {
            let temp = fast.val
            while (fast && fast.val == temp) {
                fast = fast.next
            }
        } else {
            slow.next = fast
            slow = fast
            fast = fast.next
        }
    }
    slow.next = null
    return listNode.next 
};