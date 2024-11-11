/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
    let mem = new Array(amount+1).fill(amount+1);
    mem[0] = 0;
    for(let i = 1;i<amount+1;i++){
        for(let j = 0;j<coins.length;j++){
            if((i - coins[j])>=0){
                mem[i] = Math.min(mem[i], mem[i - coins[j]]+1)
            }
        }
    }
    return mem[amount] !== amount + 1 ? mem[amount] : -1;  
};