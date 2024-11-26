module.exports = { 
    //param A : array of integers
    //return a array of integers
       repeatedNumber : function(A){
           let n = A.length;
           let s = (n*(n+1))/2
           let s2 = (n * (n + 1) * (2 * n + 1)) / 6;
           let sum = 0;
           let sum2 = 0;
           for(let i = 0;i<n;i++){
               sum += A[i];
               sum2 += A[i]*A[i];
           }
           
           let val1 = sum - s;
           let val2 = sum2 - s2;
           val2 = val2/val1
           let x = (val2+val1)/2
           let y = x - val1;
           return [x, y]
       }
   };
   