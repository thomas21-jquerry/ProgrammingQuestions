/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function (s, k) {
    let map = new Array(26).fill(0);
  
    let left = 0, right = 0;
    let maxF = 0;
  
    const A_CODE = "A".charCodeAt(0);
  
    while (right < s.length) {
      if (right - left - maxF <= k) {
        let val = ++map[s.charCodeAt(right) - A_CODE];
  
        if (val > maxF) {
          maxF = val;
        }
  
        right++;
      } else {
        map[s.charCodeAt(left) - A_CODE]--;
        left++;
      }
    }
  
    return maxF + k > s.length ? s.length : maxF + k;
  };