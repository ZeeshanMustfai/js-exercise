// Question 25:-
// Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
// Test Data :
// console.log(alphabetize_string('United States'));
// Output :
// "SUadeeinsttt"

function alphabetize_string(str) {
    let str1 = str.split('');
    str1.sort();
    for(i in str1){
        if(str1[i] == ' '){
            str1.splice(i,1);
        }
        return str1.join('');
    }
}

console.log(alphabetize_string('United States'));