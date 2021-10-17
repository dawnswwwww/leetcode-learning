/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
  const stack = []
  let start = root
  let cur = 1
  const result = []
  while(start || stack.length) {
    while(start) {
      stack.push(start)
      start = start.left
    }
    start = stack.pop()
    console.log(cur, k)
    if (cur === k) return start.val
    cur++
    start = start.right
  }
};