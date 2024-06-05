// Question 8:-
// Write a JavaScript function to capitalize the first letter of a string.
// Test Data :
// console.log(capitalize('js string exercises'));
// "Js string exercises"

function capitalize(str){
    if(str[0].charCodeAt()>=97 && str[0].charCodeAt()<=122){
        con=str.charCodeAt(0);
        str=str.replace(str[0],String.fromCharCode(con-32))
        return str;
    }
    else if(str[0].charCodeAt()>=65 && str[0].charCodeAt()<=90){
        return str = "First Letter of string is already capital.";
    }
    else{
        return str = "First letter of string is not an alphabet.";
    }
}

console.log(capitalize('js string exercises'));
console.log(capitalize('Js string exercises'));
console.log(capitalize('0s string exercises'));