// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321

 const reverse = (x)=> {
    let ans = 0;
    if(x>((2**31)-1) || x<=-(2**31)) return 0
    if(x>0){
        while (x>=1){
            console.log(x%10)
            ans = (ans*10) + (x%10);
            x = parseInt(x/10)
        }
    }
    else{
        x = -x
        while (x>=1){
            console.log(x%10)
            ans = (ans*10) + (x%10);
            x = parseInt(x/10)
        }
        ans = -ans
    }
    if(ans>((2**31)-1) || ans<=-(2**31)) return 0
    return ans
    

};