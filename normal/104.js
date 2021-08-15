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
 * @return {number}
 */
 var maxDepth = function(root, count = 1) {
  if (root && (root.left || root.right)) {
    return Math.max(...[root.left ? maxDepth(root.left, count + 1) : [],
      root.right ? maxDepth(root.right, count + 1) : []
      ])
  }
  return root ? count : 0
};