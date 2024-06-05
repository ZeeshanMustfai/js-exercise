// Question 19:-
// Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. Finally return the decimal version of the binary string.
// Test Data :
// (100) -> 19
// Explanation:
// Binary representation of 100 is 1100100
// Reverse of 1100100 is 10011
// Decimal form of 10011 is 19
// (1134) -> 945
// Explanation:
// Binary representation of 1134 is 10001101110
// Reverse of 10001101110 is 1110110001
// Decimal form of 1110110001 is 945
 
function reversedBinary(str){
    if(typeof str === "string"){
        str=parseFloat(str);
        let str1 = (str >>> 0).toString(2);
        splitStr = str1.split("");
        splitStr = splitStr.reverse();
        splitStr = splitStr.join("");
        str1 = parseInt(splitStr,2);
        return str1;
    }
    else{
        let str1 = (str >>> 0).toString(2);
        splitStr = str1.split("");
        splitStr = splitStr.reverse();
        splitStr = splitStr.join("");
        str1 = parseInt(splitStr,2);
        return str1;
    }
}

console.log(reversedBinary("100"));
console.log(reversedBinary(1134));