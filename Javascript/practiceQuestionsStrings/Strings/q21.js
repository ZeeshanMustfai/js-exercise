// Question 21:-
// Write a JavaScript function to repeat a string for a specified time.
// Test Data :
// console.log(repeat_string('a', 4));
// console.log(repeat_string('a'));
// Output :
// "aaaa"
// "Error in string or count."

function repeat_string(str,ctr){
    if(ctr){
        str= str.repeat(ctr);
        return str;
    }
    else{
        message="Error in string or count.";
        return message;
    }
}

console.log(repeat_string('a', 4));
console.log(repeat_string('a'));