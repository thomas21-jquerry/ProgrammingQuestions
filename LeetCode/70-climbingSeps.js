/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let arr = [1,1,2];
    for(i=2;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr[n]
};