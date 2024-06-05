// Question 7:-
// Write a JavaScript function to parameterize a string.
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

function string_parameterize(str){
    str = str.toLowerCase();
    str = str.replaceAll(" ","-");
    str = str.replaceAll(".","")
    return str;
}

console.log(string_parameterize("Robin Singh from USA."));