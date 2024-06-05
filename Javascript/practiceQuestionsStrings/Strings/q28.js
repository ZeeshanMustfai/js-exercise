// Question 28:-
// Write a JavaScript function to convert Hexadecimal to ASCII format.
// Test Data :
// console.log(hex_to_ascii('3132'));
// console.log(hex_to_ascii('313030'));
// Output :
// "12"
// "100"

function hex_to_ascii(str){
    str = str.toString();
    let asc = '';
    for(i=0;i<str.length;i=i+2){
        asc = asc + String.fromCharCode(parseInt(str.substr(i,2),16));
    }
    return asc;
}

console.log(hex_to_ascii('3132'));
console.log(hex_to_ascii('313030'));
// help taken from resource