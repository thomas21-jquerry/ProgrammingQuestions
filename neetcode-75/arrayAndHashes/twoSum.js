class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let mem = new Map();
        for(let i = 0;i<nums.length;i++){
            if(mem.has(nums[i])){
                return [mem.get(nums[i]),i]
            }
            mem.set(target-nums[i], i)
        }
    }
}
