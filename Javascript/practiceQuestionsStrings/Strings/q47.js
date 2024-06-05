// Question 47:-
// Write a JavaScript function to test whether a string ends with a specified string.
// Test Data :
// console.log(endsWith('JS string exercises', 'exercises'));
// true

function ends_With(str,check){
    return str.endsWith(check);
}

console.log(ends_With('JS string exercises', 'exercises'));