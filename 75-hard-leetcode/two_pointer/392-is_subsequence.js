/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    let j = 0
    let i = 0
    for(i = 0;i<t.length;i++){
        if(j<s.length){
            if(s[j]==t[i]){
                j++
            }
        }
        
    }
    if(j==s.length) return true
    return false
};