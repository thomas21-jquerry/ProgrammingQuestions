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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let path = []
    let ans = []
    const helper = (node, sum)=> {
        if(!node) return
        path.push(node.val);
        sum-=node.val;
        if(sum==0 && !node.left && !node.right){
            ans.push([...path])
        }
        if(node.left){
            helper(node.left, sum)
        }
        if(node.right){
            helper(node.right, sum)
        }
        sum+=node.val;
        path.pop()
    }
    helper(root,targetSum)
    return ans;
};