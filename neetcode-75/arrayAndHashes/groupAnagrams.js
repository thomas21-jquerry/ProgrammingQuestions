class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let mem = {}
        for(let s of strs){
            if(!mem[s.split('').sort().join('')]){
                mem[s.split('').sort().join('')] = [s]
            }
            else{
                mem[s.split('').sort().join('')].push(s)
            }
        }
        return Object.values(mem);
    }
}
