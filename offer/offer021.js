/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let res = head
  let count = 0
  while(res) {
    res = res.next
    count++
  }
  let l = count - n
  if (n === count) return head.next
  let temp = head
  for (let i = 0; i < l - 1; i++) {
    temp = temp.next
  }
  temp.next = temp.next.next
  return head
};