/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    let ans = [];
    let cur = [];
    let sum = 0;
    fun(sum,target,cur,ans, candidates)
    return ans;
};

let fun = (sum,target,cur,ans,candidates)=>{
    candidates.forEach((ele,ind)=>{
        if(sum+ele == target){
            ans.push([...cur,ele])
        }
        else if(sum + ele > target){
            return;
        }
        else{
            fun(sum+ele, target, [...cur , ele], ans, candidates.slice(ind))
        }
    })
    return
}