/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
 var cloneGraph = function(node) {
    let root = {}
    const visited = new Set()
    helper(node, root, visited)
  
    return root[1]
  };
  
  function helper(node, root, visited) {
    if(!node || visited.has(node.val)) return
  
    const neighbors = node.neighbors
    if(!root[node.val]) {
      root[node.val] = {
        val: node.val,
        neighbors: []
      }
    }
  
    visited.add(node.val)
    for(let n of neighbors) {
      if(!root[n.val]) {
        root[n.val] = {
          val: n.val,
          neighbors: []
        }
      }
      root[node.val].neighbors.push(root[n.val])
      helper(n, root, visited)
    }
  }