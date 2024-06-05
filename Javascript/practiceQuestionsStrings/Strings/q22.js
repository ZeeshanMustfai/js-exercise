// Question 22:-
// Write a JavaScript function to get a part of a string after a specified character.
// Test Data :
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));
// Output :
// "w3resource"
// "xercises"

function subStrAfterChars(str, chr, position) {
    if(str.search(chr)>= 0){
        if(position === 'a'){
            index = str.indexOf(chr);
            str = str.slice(index+1);
            return str;
        }
        else{
            index = str.indexOf(chr);
            str = str.slice(0,index);
            return str;
        }
    }
    else{
        message = "The character passed is not in the string.";
        return message;
    }
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','b'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','a'));