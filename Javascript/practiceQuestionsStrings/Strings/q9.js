// Question 9:-
// Write a JavaScript function to capitalize the first letter of each word in a string.
// Test Data :
// console.log(capitalize_Words('js string exercises'));
// "Js String Exercises"

function capitalize_Words(str){
    const regex = /(^|\s)[a-z]/g;
    str = str.replace(regex, (text) => text.toUpperCase() );
    return str;
}

console.log(capitalize_Words('js string exercises'));