// Question 2:-
// Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

function is_Blank(str){
    if(typeof str === "string"){
        if(str.length === 0 ){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        console.log("It is not a string.");
    }}

console.log(is_Blank(''));
console.log(is_Blank('abc'));