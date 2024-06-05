// Question 10:-
// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

function swapcase(str){
    const regex = /[a-z]|[A-Z]/g;
    str = str.replace(regex, (text)=>{
        if(text.charCodeAt()>=97 && text.charCodeAt()<=122){
            return text.toUpperCase();
        }
        else{
            return text.toLowerCase();
        }
    });

    return str;
}

console.log(swapcase('AaBbc'));