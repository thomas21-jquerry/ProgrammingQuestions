/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let cur = 0;
    let sub = "";
    for(let i = 0;i<s.length;i++){ 
        if(sub.indexOf([s[i]]) === -1){
            sub+=s[i];
            cur+=1;
            ans = Math.max(ans,cur);
            
        }
        else{
            i = sub.indexOf(s[i]) + 1
            cur = 1;
            sub = s[i];
        }
    }
    return ans;
};

console.log("ans",lengthOfLongestSubstring("abcabcbb"))