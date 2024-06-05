// Question 4:-
// Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"

function truncate_string(str,size){
    return str.substr(0,size);
}

console.log(truncate_string("Robin Singh",4));