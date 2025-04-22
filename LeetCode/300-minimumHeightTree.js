/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findMinHeightTrees = function(n, edges) {
    if (!edges.length) return [0];
    const depth = Array(n).fill(0);
    const graph = Array.from({ length: n }, () => []);

    for (const [parent, child] of edges) {
        graph[parent].push(child);
        graph[child].push(parent);
        depth[child]++;
        depth[parent]++;
    }

    const queue = [];
    let front = 0;
    for (let i = 0; i < depth.length; i++) {
        if (depth[i] === 1) queue.push(i);
    }
    while (n > 2) {
        const popEle = queue.length - front;
        n -= popEle;
        for (let i = 0; i < popEle; i++) {
            const currentElm = queue[front++];
            for (const currentGraph of graph[currentElm]) {
                depth[currentGraph]--;
                if (depth[currentGraph] === 1) queue.push(currentGraph);
            }
        }
    }
    return queue.slice(front);
};