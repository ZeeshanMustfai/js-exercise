// Question 53:-
// Write a JavaScript function to check a given string is in Flat case or not.
// Flat case: As the name implies, flatcase refers to the use of lowercase letters, with no spaces between words.
// Test Data :
// ('j') -> true
// ('java exercises') -> false
// ('JavaScriptExercises') -> false
// ('javascriptexercises') -> true
// (12356) -> "It must be a string."

function isFlatcase(str) {
    if(typeof str === 'string'){
        str = str.split('');
        for(i in str){
            if((str[i].charCodeAt()>=65 && str[i].charCodeAt()<=90) || str[i] === ' '){
                return false;
            }
        }
        return true;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(isFlatcase('j'));
console.log(isFlatcase('java exercises'));
console.log(isFlatcase('JavaScriptExercises'));
console.log(isFlatcase('javascriptexercises'));
console.log(isFlatcase(12356));