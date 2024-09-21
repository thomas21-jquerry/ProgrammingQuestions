// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.


 var searchRange = function(nums, target) {
    const search = (nums,target, isSearchingLeft)=>{
        let left = 0;
        let right = nums.length -1;
        let idx = -1;
        while(left<=right){
            const mid = Math.floor((left+right)/2)
            if(nums[mid] > target){
                right = mid-1;
            }
            else if (nums[mid]< target){
                left = mid+1;
            }
            else{
                idx = mid;
                if(isSearchingLeft){
                    right = mid-1
                }
                else{
                    left = mid+1
                }
            }

        }
        return idx
    }

    const ans1 = search(nums, target, true);
    const ans2 = search(nums, target, false);
    return [ans1,ans2]

};