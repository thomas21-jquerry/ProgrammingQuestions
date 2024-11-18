/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    nums = new Set(nums);
    nums = Array.from(nums);
    nums = nums.sort((a,b)=>a-b)
    if(nums.length==0){
        return 0
    }
    let cur = 1
    let ans = 1;
    for(let i = 0;i<nums.length;i++){
        if(nums[i]+1===nums[i+1]){
            cur++
            ans = Math.max(cur,ans)
        }
        else{
            cur = 1
        }
    }
    return ans
};