// Question 44:-
// Write a JavaScript function to test whether the character at the given (character) index is lower case.
// Test Data :
// console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
// true

function isLowerCaseAt(str,check){
    if(str[check].charCodeAt()>=97 && str[check].charCodeAt()<=122){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));