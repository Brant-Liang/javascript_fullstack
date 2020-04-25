function ListNode(val) {
  this.val = val;
  this.next = null;
}

var merageTwoLists = function(l1, l2) {
  var head = new ListNode(-1);
  var cur = head;
  while(l1 !== null && l2 !== null) {
    if(l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l1;
  return head.next;
}