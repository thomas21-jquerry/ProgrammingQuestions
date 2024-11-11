/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length).fill(false);
    let dict = new Set();
    wordDict.forEach((ele)=>{
        dict.add(ele)
    });

    for(let i = 0;i<s.length;i++){
        if(dict.has(s.slice(0,i+1))){
            dp[i] = true;
            continue;
        }
        for(let j = 0;j<i+1;j++){
            if(dp[j]){
                if(dict.has(s.slice(j+1,i+1))){
                    dp[i] = true;
                    break
                }
            }
        }
    }
    return dp[s.length-1]
};