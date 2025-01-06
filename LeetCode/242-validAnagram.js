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

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let dict = new Map();
    for(let ele of s){
        dict.set(ele, (dict.get(ele)|| 0)+1);
    }

    for(let ele of t){
        if(!dict.has(ele)|| dict.get(ele)==0){
            return false
        }
        dict.set(ele,dict.get(ele)-1)
    }
    return true
};