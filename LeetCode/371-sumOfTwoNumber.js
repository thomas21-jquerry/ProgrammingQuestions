/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
    let sum,carry;
    while(carry!=0){
        sum = a ^ b;
        carry = ( a & b) << 1;
        a = sum;
        b = carry;
    }
    return sum;
};