/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = (s)=>{
    let stack = [];
    for(let char of s){
        if(char !== "]"){
            stack.push(char);
            continue;
        }
            let str = '';
            let cur = stack.pop();
            while(cur !== '['){
                str = cur + str;
                cur = stack.pop();
            }
            let mul = '';
            cur = stack.pop();
            while(!Number.isNaN(Number(cur))){
                mul = cur + mul;
                cur = stack.pop();
            }
            stack.push(cur);
            stack.push(str.repeat(Number(mul)))
        
    }
    return stack.join('')
}
