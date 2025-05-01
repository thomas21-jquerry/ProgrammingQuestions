/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxOperations = function(nums, k) {
    nums.sort((a,b)=>a-b);
    let ans = 0
    let l = 0;
    let r = nums.length-1;
    while(l<r){
        const sum = nums[l]+ nums[r];
        if(sum===k){
            l++;
            r--;
            ans++;
        }
        else if(sum<k){
            l++
        }
        else {
            r--
        }
    }
    return ans;
};