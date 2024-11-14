/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0]
    if(dp[0]==0 && nums.length >1){
        return false
    }
    for(let i = 1;i<nums.length;i++){
        dp[i] = Math.max(dp[i-1]-1,nums[i])
        if((dp[i]==0) && (i<nums.length-1)){
            return false
        }
    }
    return true
    
};