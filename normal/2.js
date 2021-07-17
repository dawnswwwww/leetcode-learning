/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 let reverse  = function (arr) {
    let temp = []
    let j = 0
    for (let i = arr.length -1; i >= 0; i--) {
        temp[j] = arr[i]
        j++
    }
    return temp
 }
 
var addTwoNumbers = function(l1, l2) {
    l1 = Array.from(l1)
    l2 = Array.from(l2)
    let a = +(reverse(l1).join('')) + +(reverse(l2).join(''))
    return reverse(String(a).split(''))
};

console.log(addTwoNumbers([8,0,4], [1,8,3]))