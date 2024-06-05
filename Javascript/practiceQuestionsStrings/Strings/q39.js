// Question 39:-
// Write a JavaScript function to uncapitalize the first character of a string.
// Test Data :
// console.log(Uncapitalize('Js string exercises'));
// "js string exercises"

function uncapitalize(str){
    if(str[0].charCodeAt()>=65 && str[0].charCodeAt()<=90){
        con=str.charCodeAt(0);
        str=str.replace(str[0],String.fromCharCode(con+32))
        return str;
    }
    else if(str[0].charCodeAt()>=97 && str[0].charCodeAt()<=122){
        return str = "First Letter of string is already uncapital.";
    }
    else{
        return str = "First letter of string is not an alphabet.";
    }
}

console.log(uncapitalize('js string exercises'));
console.log(uncapitalize('Js string exercises'));
console.log(uncapitalize('0s string exercises'));