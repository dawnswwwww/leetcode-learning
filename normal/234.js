/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  let tail = head
  const arr = [tail]
  while(tail.next) {
    tail = tail.next
    arr.push(tail)
  }
  let n = arr.length
  let l = ~~(n / 2)
  for (let i = 0; i < l; i++) {
    if (arr[i].val !== arr[n - i - 1].val) return false
  }
  return true
};
