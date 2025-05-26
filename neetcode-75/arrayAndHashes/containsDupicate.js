class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hash = new Set()
        for(let ele of nums){
            if(hash.has(ele)){
                return true
            }
            hash.add(ele)
        }
         return false
    }
   
}
