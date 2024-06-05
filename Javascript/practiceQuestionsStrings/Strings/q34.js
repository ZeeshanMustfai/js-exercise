// Question 3:-
// Write a JavaScript function to convert a string to title case.
// Test Data :
// console.log(sentenceCase('PHP exercises.  python exercises.'));
// "Php Exercises.  Python Exercises."

function sentenceCase(str){
    const regex = /(^|\s)[a-z]/g;
    str = str.replace(regex, (text) => text.toUpperCase() );
    return str;
}

console.log(sentenceCase('PHP exercises. python exercises.'));