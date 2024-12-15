"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function oddEvenList(head) {
    var _a;
    if (!head || !head.next)
        return head; // empty list or one node
    var node = head;
    var secondNode = head.next;
    var even = secondNode;
    var isOdd = true;
    while (node) {
        var nextNode = (_a = node === null || node === void 0 ? void 0 : node.next) === null || _a === void 0 ? void 0 : _a.next;
        if (isOdd) {
            // If current node is odd
            nextNode && (node.next = nextNode);
            if (!nextNode && !node.next) {
                node.next = secondNode;
                break;
            }
            node.next && (node = node.next);
            isOdd = false;
            console.log(node.val, nextNode === null || nextNode === void 0 ? void 0 : nextNode.val, even.val);
        }
        else {
            // If current node is even
            if (nextNode) {
                even.next = node.next;
                even.next && (even = even.next);
                isOdd = true;
            }
            else {
                if (node.next) {
                    node.next.next = secondNode;
                    break;
                }
                else {
                    node.next = secondNode;
                    break;
                }
            }
            console.log(node.val, nextNode === null || nextNode === void 0 ? void 0 : nextNode.val, even.val);
        }
    }
    return head;
}
