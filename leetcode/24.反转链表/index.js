
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ReverseList(pHead)
{
  if(pHead === null || pHead.next === null) return pHead;
  var ret = ReverseList(pHead.next);
  pHead.next.next = pHead;
  pHead.next = null;
  return ret;
}
var l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);
console.log(l1);