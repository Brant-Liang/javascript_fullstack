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
var hasCycle = function (head) {
   let map = new Map();
   let current = head;
   while (current) {
      // if(map.has(current)){
      //    return true;
      // }else{
      //    map.set(current, '123');   
      // }
      if(current.__hasVisited){
         return true
      }else{
         current.__hasVisited = true;
      }
      current = current.next;
   }
   return false;
};
//快慢指针
var hasCycle = function(head){
   var slow = fast = head;
   while(slow && fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
      if(slow == fast){
         return true;
      }
   }
   return false;
}
var myHead = [3, 2, 0, -4]