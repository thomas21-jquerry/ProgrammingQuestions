
// DFS Approach
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root,count=0) {
    if(!root){
        return count
    }
    return Math.max(maxDepth(root.left, count+1) ,
    maxDepth(root.right, count+1))
};



// BFS Approach
 var maxDepth = function(root) {
    if(!root){
        return 0
    }
    let queue = [];
    queue.push(root);
    let depth = 0
    while(queue.length>0){
        depth++
        let size = queue.length;
        for(let i = 0;i<size;i++){
            const node = queue.shift();
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
    }
    return depth
};