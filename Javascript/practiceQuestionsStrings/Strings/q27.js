// Question 27:-
// Write a JavaScript function to convert ASCII to Hexadecimal format.
// Test Data :
// console.log(ascii_to_hexa('12'));
// console.log(ascii_to_hexa('100'));
// Output :
// "3132"
// "313030"

function ascii_to_hexa(str){
    let arr= [];
    for(i in str){
        hex=Number(str.charCodeAt(i)).toString(16);
        arr.push(hex);
    }
    return arr.join("");
}

console.log(ascii_to_hexa('12'));
console.log(ascii_to_hexa('100'));
// help taken from resource