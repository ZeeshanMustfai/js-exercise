// Question 56:-
// Write a JavaScript function to check whether a string is in Pascal case or not.
// A PascalCase naming convention capitalizes the first letter of each compound word in a variable. It is a best practice in software development to use descriptive variable names.
// Test Data :
// ("XmlStream") -> true
// ("IOStream") -> true
// ("javascript") -> false
// (12356) -> "It must be a string."

function isPascalCase(str){
    if(typeof str === 'string'){
        if((str[0].charCodeAt()>=65 && str[0].charCodeAt()<=90)){
            const regex = /^[A-Z]*$/i;
            if(regex.test(str)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(isPascalCase("XmlStream"));
console.log(isPascalCase("IOStream"));
console.log(isPascalCase("javascript"));
console.log(isPascalCase(123456));