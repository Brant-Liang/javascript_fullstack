/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let preHead = new ListNode(-1)
  let prev = preHead
  while(l1 !== null && l2 !== null) {
    if(l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    }else {
      prev.next = l2
      l2 = l2.next 
    }
    prev = prev.next
  }
  prev.next = l1 == null ? l2 : l1
  return preHead.next
};
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l1 = new ListNode(1)
l1.next = new ListNode(2)
l1.next.next = new ListNode(3)

var l2 = new ListNode(1)
l2.next = new ListNode(3)
l2.next.next = new ListNode(4)

console.log(mergeTwoLists(l1,l2));