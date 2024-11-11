/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
 var longestCommonSubsequence = function(text1, text2) {
    let dp = new Array(text1.length).fill(0)
    let ans = 0
    for(let ele of text2){
        let curLength = 0;
        for(let i = 0;i <text1.length;i++){
             if (curLength < dp[i]) {
                curLength = dp[i];
            }
            else if(ele == text1[i]){
                dp[i] = curLength+1;
                ans = Math.max(ans,curLength+1)
            }
        }
    }
    return ans;
};