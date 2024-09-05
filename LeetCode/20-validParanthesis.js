// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true



/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = (s) => {
    let bracket = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    let stack = [];
    let character;
    for(let char of s){
        if(bracket[char]){
            stack.push(bracket[char])
        }
        else{
            character = stack.pop(bracket[char])
            if(character != char){
                return false
            }
        }
    }
    return !stack.length
};