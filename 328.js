var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
    return ListNode;
}());
function oddEvenList(head) {
    var isOdd = head.value % 2;
    var node = head;
    var lastOdd;
    var lastEven;
    while (node.next) {
        var isInnerOdd = node.value % 2;
        if (isOdd === isInnerOdd) {
            if (isOdd) {
                if (!lastOdd) {
                    lastOdd = node;
                }
                else {
                    lastOdd.next = node;
                    lastOdd = node;
                }
            }
            else {
                if (!lastEven) {
                    lastEven = node;
                }
                else {
                    lastEven.next = node;
                    lastEven = node;
                }
            }
        }

        node = node.next;
    }
}
