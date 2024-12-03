/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
    let res = [];
    for(let i = 0;i<matrix[0].length;i++){
        let row = [];
        for(let j = matrix.length-1;j>=0;j--){
            row.push(matrix[j][i])
        }
        res.push(row)
    }
    for(let i = 0; i<res.length;i++){
        for(let j = 0;j<res.length;j++){
            matrix[i][j] = res[i][j]
        }
    }
    return matrix
};