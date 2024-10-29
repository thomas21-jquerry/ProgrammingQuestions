/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let hash = {}
    for(let i =0;i<nums.length;i++){
        const goal = target-nums[i]
        if(nums[i] in hash){
            return [i,hash[nums[i]]]
        }
        hash[goal] = i
    }

};