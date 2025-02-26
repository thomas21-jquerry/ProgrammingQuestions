var exist = function(board, word) {
    const m = board.length;
    const n = board[0].length;
    
    const backtrack = (i, j, k) => {
        if (k === word.length) {
            return true;
        }
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word.charAt(k)) {
            return false;
        }
        
        const temp = board[i][j];
        board[i][j] = '\0'; 
        
        const result = backtrack(i + 1, j, k + 1) || 
                       backtrack(i - 1, j, k + 1) || 
                       backtrack(i, j + 1, k + 1) || 
                       backtrack(i, j - 1, k + 1);
        
        board[i][j] = temp; 
        return result;
    };
    
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};


var exist = function(board, word) {
    const row = board.length;
    const col = board[0].length;
    function helper(r,c,k){
     if(k == word.length){
         return true
     }
     if(r<0 || c < 0 || r>=row || c>= col || word.charAt(k)!=board[r][c]){
         return false
     }
     
     const temp = board[r][c];
     board[r][c] = "\0"
     const resp = helper(r+1,c,k+1) || helper(r-1,c,k+1) || helper(r,c+1,k+1) || helper(r,c-1,k+1);
     board[r][c] = temp
     return resp;
    }
    for(let i = 0;i<row;i++){
     for(let j = 0;j<col;j++){
         if(helper(i,j,0)){
             return true;
         }
     }
    }
    return false;
 };