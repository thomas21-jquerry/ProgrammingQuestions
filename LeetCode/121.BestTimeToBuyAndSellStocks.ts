/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let ans = 0;
    let j = 0
    for(let i = 0;i<prices.length; i++){
        if(prices[i]>prices[j]){
            ans = Math.max(ans,prices[i]-prices[j])
        }
        else if(prices[i]<prices[j]){
            j = i;
        }
        
    }
    return ans
};