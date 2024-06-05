// Question 38:-
// Write a JavaScript function to create a case-insensitive search.
// Test Data :
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
// "Matched"
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));
// "Not Matched"

function case_insensitive_search(str, str1){
    result = str.search(new RegExp(str1, "gi"));
    if(result>0){
        matched = "Matched";
        return matched;
    }
    else{
        unmatched = "Not Matched";
        return unmatched;
    }
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));