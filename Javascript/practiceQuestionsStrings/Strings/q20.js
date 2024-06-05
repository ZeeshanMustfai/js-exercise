// Question 20:-
// Write a JavaScript function that can pad (left, right) a string to get to a specific length.
// Test Data :
// console.log(formatted_string('0000',123,'l'));
// console.log(formatted_string('00000000',123,''));
// Output :
// "0123"
// "12300000"

function formatted_string(format,addStr,d){
    addStr = addStr.toString();
    size = format.length;
    if(d === "l"){
        return addStr.padStart(size, "0")
    }
    else if(d === "r"){
        return addStr.padEnd(size, "0")
    }
    else{
        message = "Padding direction is not mentioned.";
        return message;
    }
}

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,'r'));
console.log(formatted_string('00000000',123));