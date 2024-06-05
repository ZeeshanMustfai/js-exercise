// Question 62:-
// Write a JavaScript function to get the length of the longest valid parentheses (well-formed) from a given string containing just the characters '[' and ']'.
// Test Data :
// The longest valid parentheses substring is "[]".
// ("[[]") -> 2
// The longest valid parentheses substring is "[][]".
// ("][][]]") -> 4
// No valid parentheses substring.
// ("") -> 0

function deletePair(str,iter, count){
    for(j=iter; j<str.length; j++){
        if(str[j] === ']'){
            str = str.splice(j,1);
            count=count+2;
        }
    }
    return count;
}

function validParanthesis(str) {
    if(typeof str === 'string'){
        str = str.split('');
        count = 0;
        for(i=0;i<str.length;i++){
            if(str[i] === '['){
                count = deletePair(str,i,count);
            }
        }
        return count;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(validParanthesis('[[]'));
console.log(validParanthesis('][][]]'));
console.log(validParanthesis(''));