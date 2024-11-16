/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let dp = [];

    for(let i = 0;i<m+1;i++){
        let temp = new Array(n+1).fill(0);
        dp.push(temp);
    }
    dp[1][1] = 1
    for(let i = 1;i<=m;i++){
        for(let j = 1;j<=n;j++){
            if(dp[i][j]>0){
                continue;
            }
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }

    return dp[m][n]
};