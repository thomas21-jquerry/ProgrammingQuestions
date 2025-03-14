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
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    let ans = [];

    const inorder = (node)=>{
        if(node){
            inorder(node.left);
            ans.push(node.val);
            inorder(node.right);
        }
        return
    }
    inorder(root)
    return ans
};