// Question 60:-
// Write a JavaScript function to reverse words in a given string.
// Test Data :
// ("abc") -> "cba"
// ("JavaScript Exercises") -> "tpircSavaJ sesicrexE"
// (1234) -> "It must be a string."

function reverseWordString(str) {
    if(typeof str === 'string'){
        str = str.split(' ');
        for(i in str){
            str[i] = str[i].split('');
            str[i] = str[i].reverse();
            str[i] = str[i].join('');
        }
        str = str.join(' ');
        return str;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(reverseWordString("abc"));
console.log(reverseWordString("JavaScript Exercises"));
console.log(reverseWordString(1234));