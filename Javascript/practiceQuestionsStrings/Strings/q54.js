// Question 54:-
// Write a JavaScript function to check a given string is in Kebab case or not.
// Kebab case: "the-quick-brown-fox-jumps-over-the-lazy-dog"
// Similar to snake case, above, except hyphens rather than underscores are used to replace spaces. It is also known as spinal case, param case, Lisp case in reference to the Lisp programming language, or dash case (or illustratively as kebab-case)
// Test Data :
// ('j') -> true
// ('java exercises') -> false
// ('JavaScriptExercises') -> false
// ('javascriptexercises') -> true
// (12356) -> "It must be a string."

function kebabCase(str) {
    const regex = /[a-z-]+/g;
    if(typeof str === 'string'){
        str = str.split('');
        for(i = 0; i<str.length; i++){
            if(!str[i].match(regex)){
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

console.log(kebabCase("j"));
console.log(kebabCase("java exercises"));
console.log(kebabCase("JavaScriptExercises"));
console.log(kebabCase("javascriptexercises"));
console.log(kebabCase(12356));