/**
 Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
 */
 var romanToInt = function(s) {
    let a = new Map()
    a.set("I",1);
    a.set("V", 5);
    a.set("X",10);
    a.set("L",50);
    a.set("C",100);
    a.set("D",500);
    a.set("M",1000);
    let ans = 0;
    for(let i =0;i<s.length;i++){
        if(a.get(s[i])<a.get(s[i+1])){
            ans= ans+(a.get(s[i+1])-a.get(s[i]));
            i++;
        }else{
            ans+=a.get(s[i])
        }
    }
    
    return ans;
   
};