/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let count = 0;
    for(let i =0;i<grid.length;i++){
        for(let j = 0;j<grid[0].length;j++){
            if(grid[i][j]=="1"){
                count++;
                transform(i,j,grid)
            }
        }
    }
    return count;
}

let transform = (row,col,grid)=>{
    if(grid[row]===undefined || grid[row][col] === undefined|| grid[row][col]==="0"){ return;}
    grid[row][col] = "0"
    transform(row-1, col, grid)
    transform(row, col-1, grid)
    transform(row+1, col, grid)
    transform(row, col+1, grid)
}