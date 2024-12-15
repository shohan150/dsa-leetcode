class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head: ListNode | null): ListNode | null {
  const isOdd: number = head.value % 2;
  let node: ListNode = head;
  let lastOdd: ListNode;
  let lastEven: ListNode;

  while (node.next) {
    let isInnerOdd = node.value % 2;

    if (isOdd === isInnerOdd) {
      if (isOdd) {
        if (!lastOdd) {
          lastOdd = node;
        } else {
          lastOdd.next = node;
          lastOdd = node;
        }
      } else {
        if (!lastEven) {
          lastEven = node;
        } else {
          lastEven.next = node;
          lastEven = node;
        }
      }
    }
  }
}
