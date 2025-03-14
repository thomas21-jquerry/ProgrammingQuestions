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
 var maxPathSum = function(root) {
    let ans = -Infinity;
    const helper = (node)=>{
        if(!node) return 0
        let left = Math.max(0, helper(node.left))
        let right = Math.max(0, helper(node.right))
        ans = Math.max(ans, node.val + left + right)
        return node.val + Math.max(left, right)
    }
    helper(root)
    return ans
};