// Question 11:-
// Write a JavaScript function to convert a string into camel case.
// Test Data :
// console.log(camelize("JavaScript Exercises"));
// console.log(camelize("JavaScript exercises"));
// console.log(camelize("JavaScriptExercises"));
// "JavaScriptExercises"
// "JavaScriptExercises"
// "JavaScriptExercises"

function camelize(str){
    const regex = /(^|\s)[a-z]|(^|\s)[A-Z]/g;
    str = str.replace(regex, (txt) => {
        if(txt.length == 2){
            if(txt[1].charCodeAt()>=97 && txt[1].charCodeAt()<=122){
                return txt[1].toUpperCase(); 
            }
            else{
                return txt[1];
            }
        }
        else{
            if(txt[0].charCodeAt()>=97 && txt[0].charCodeAt()<=122){
                return txt[0].toUpperCase(); 
            }
            else{
                return txt[0];
            }
        }
    })
    return str;
}

console.log(camelize("javaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));