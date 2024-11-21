/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    let ans = [];
    intervals.sort((a,b)=>a[0]-b[0]);
    ans.push([intervals[0][0],intervals[0][1]]);
    for(let i = 1;i<intervals.length;i++){
        if(ans[ans.length-1][1]>=intervals[i][0]){
            ans[ans.length-1][1] = Math.max(intervals[i][1], ans[ans.length -1][1]);
        }
        else{
            ans.push([intervals[i][0], intervals[i][1]])
        }
    }
    return ans
};