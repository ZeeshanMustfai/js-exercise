// Questoion 24:-
// Write a JavaScript function to truncate a string to a certain number of words.
// Test Data :
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4));
// Output :
// "The quick brown fox"

function truncate(str,count) {
    let str1 = str.split(" ");
    for(i=str1.length;i>count;i--){
        str1.pop();
    }
    return str1.join(" ")
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));