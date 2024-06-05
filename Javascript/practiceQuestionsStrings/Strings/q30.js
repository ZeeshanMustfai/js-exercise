// Question 30:-
// Write a JavaScript function that checks whether a string ends with a specified suffix.
// Test Data :
// console.log(string_endsWith('JS PHP  PYTHON',' PYTHON'));
// true
// console.log(string_endsWith('JS PHP PYTHON',''));
// false

function string_endsWith(str, check){
    return str.endsWith(check);
}

console.log(string_endsWith('JS PHP  PYTHON',' PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',' '));