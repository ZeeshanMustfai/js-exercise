// Question 36:-
// Write a JavaScript function to create a zero-filled value with an optional +, - sign.
// Test Data :
// console.log(zeroFill(120, 5, '-'));
// "+00120"
// console.log(zeroFill(29, 4));
// "0029"

function zeroFill(str,size,sign){
    if(sign){
        str = str.toString();
        str = str.padStart(size, "0");
        return str.padStart(size+1, sign);
    }
    else{
        str = str.toString();
        return str.padStart(size, "0");
    }
}

console.log(zeroFill(120, 5, '-'));
console.log(zeroFill(29, 4));