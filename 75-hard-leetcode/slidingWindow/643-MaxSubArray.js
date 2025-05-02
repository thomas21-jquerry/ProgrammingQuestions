/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findMaxAverage = function(nums, k) {
    let left = 0
    let right = k
    let ans = 0;
    let sum = 0
    for(let i = 0;i<k;i++){
        ans+=nums[i]
    }
    sum = ans
    while(right<nums.length){
        sum = sum + nums[right]-nums[left]
       
        ans = Math.max(ans, sum);
        left++
        right++
    }
    return ans/k

};