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
 var isBalanced = function(root) {
    if(!root) return true
    if(height(root)==-1) return false
    return true;
};

function height(root){
    if(!root) return 0
    let leftHeight = height(root.left)
    let rightHeight = height(root.right)
    if(leftHeight==-1 || rightHeight == -1) return -1
    if(Math.abs(leftHeight-rightHeight)>1) return -1
    return Math.max(leftHeight, rightHeight) +1
}