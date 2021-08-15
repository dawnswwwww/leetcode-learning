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
 * @return {boolean}
 */
 var isValidBST = function(root, left) {
  const stack = []
  let lastVal = -Infinity
  while(stack.length || root) {
    while(root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (root.val <= lastVal) return false
    lastVal = root.val
    root = root.right;
  }
  return true
};