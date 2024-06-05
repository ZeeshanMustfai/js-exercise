// Question 37:-
// Write a JavaScript function to test case-insensitive (except special Unicode characters) string comparison.
// Test Data :
// console.log(compare_strings('abcd', 'AbcD'));
// true
// console.log(compare_strings('ABCD', 'Abce'));
// false

function compare_strings(str,str1){
    const regex = new RegExp(`${str1}`, 'gi');
    if(!str.search(regex)){
        return true;
    }
    else{
        return false;
    }
}

console.log(compare_strings('abcd', 'AbcD'));
console.log(compare_strings('ABCD', 'Abce'));