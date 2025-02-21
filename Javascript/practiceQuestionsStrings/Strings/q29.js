// Question 29:-
// Write a JavaScript function to find a word within a string.
// Test Data :
// console.log(search_word('The quick brown fox', 'fox'));
// console.log(search_word('aa, bb, cc, dd, aa', 'aa'));
// Output :
// "'fox' was found 1 times."
// "'aa' was found 2 times."

function search_word(str, find){
    const regex = new RegExp(`${find}`, 'gi');
    temp = str.match(regex);
    let count = temp.length;
    output = `"${find}" was found ${count} times`;
    return output;
}

console.log(search_word('The quick brownfox fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));