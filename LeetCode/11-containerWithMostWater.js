/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let ans = 0;
    let l = 0;
    let r = height.length -1;
    while(l<r){
        ans = Math.max(ans,Math.min(height[l],height[r]) * (r-l));
        height[l]>height[r]? r-- : l++
    }
    return ans
};