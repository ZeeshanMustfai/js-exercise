// Question 26:-
// Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
// Test Data :
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output :
// "The quick brown fox jumps over lazy dog"

function remove_first_occurrence(str, rmv) {
    str = str.split(" ");
    for(i in str){
        if(str[i]=== rmv){
            str.splice(i,1);
        }
    }
    return str.join(" ");
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));