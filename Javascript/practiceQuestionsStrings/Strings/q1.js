// Question 1:-
// Write a JavaScript function to check whether an 'input' is a string or not.
// Test Data :
// console.log(is_string('w3resource'));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

function is_string(str){
    if(typeof str === "string"){
        return true;
    }
    else{
        return false;
    }
}

console.log(is_string('w3resource'));
console.log(is_string(['w3resource']));