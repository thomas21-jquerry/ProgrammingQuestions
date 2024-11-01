/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let isZeroExist = false;
    let isMultZeroExist = false;
    let mul = 1
    let ans = []
    for(let i = 0;i<nums.length;i++){
        if(nums[i]!=0){
            mul=mul*nums[i]
        }
        else{
            if(!isZeroExist){
                isZeroExist = true;
            }
            else{
                isMultZeroExist = true;
                break;
            }
            
        }
        
    }

    for(let i = 0;i<nums.length;i++){
        if(isMultZeroExist){
            ans.push(0);
            continue;
        }
        if(isZeroExist){
            if(nums[i]==0){
                ans.push(mul)
            }
            else{
                ans.push(0)
            }
               
        }
        else {
            ans.push(mul/nums[i])
        }
        
    }
    return ans
};