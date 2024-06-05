// Question 40:-
// Write a JavaScript function to uncapitalize the first letter of each word of a string.
// Test Data :
// console.log(unCapitalize_Words('Js String Exercises'));
// "js string exercises"

function unCapitalize_Words(str){
    const regex = /(^|\s)[A-Z]/g;
    str = str.replace(regex, (txt) => txt.toLowerCase() );
    return str;
}

console.log(unCapitalize_Words('Js String Exercises'));