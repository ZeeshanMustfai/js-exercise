//  Question 43:-
// Write a JavaScript function to test whether the character at the index provided is upper case.
// Test Data :
// console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
// false

function isUpperCaseAt(str, check){
    if(str[check].charCodeAt()>=65 && str[check].charCodeAt()<=90){
        return true;
    }
    else{
        return false;
    }
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));