/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    let mem = new Array(26).fill(0);
    s.split('').forEach((ele)=>{
        mem[ele.charCodeAt(0) - 'a'.charCodeAt(0)]+=1;
    })
    t.split('').forEach((ele)=>{
        mem[ele.charCodeAt(0) - 'a'.charCodeAt(0)]-=1;
    })
    for(let ele of mem){
        if(ele!=0){
            return false
        }
    }
    return true
};