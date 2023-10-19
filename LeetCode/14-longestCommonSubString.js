
// solution 1
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    let output = "";

    for(let i=0;i<strs[0].length;i++){
        for(let j = 0;j<strs.length;j++){
            if(strs[j][i]===strs[0][i] && j===strs.length-1){
                output+=strs[0][i];
            }
            else if(strs[j][i]!=strs[0][i]){
                return output;
            }
        }
    }
    return output
};


// solution 2

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function (strs) {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
      if(strs.every(str=>str[i]===strs[0][i])){
          output+=strs[0][i];
      }
      else return output;
    }
    return output;
};