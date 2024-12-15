"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function oddEvenList(head) {
    if (!head || !head.next)
        return head; // Edge case: empty list or one node
    var node = head; // Pointer to traverse the list
    var secondNode = head.next; // Head of the even list
    var even = secondNode; // Pointer to traverse the even list
    var count = 1; // Track the position of nodes (odd or even)
    while (node && node.next) {
        var nextNode = node.next.next; // Save the next odd node
        if (count % 2 === 1) {
            // If current node is odd
            node.next = nextNode; // Connect to the next odd node
            if (!nextNode) {
                node.next = secondNode; // Attach the even list at the end
                break;
            }
            node.next && (node = node.next); // Move the odd pointer
        }
        else {
            // If current node is even
            even.next = nextNode; // Connect to the next even node
            even.next && (even = even.next); // Move the even pointer
        }
        count++;
    }
    node.next = secondNode; // Finally attach the even list to the end of the odd list
    return head;
}
