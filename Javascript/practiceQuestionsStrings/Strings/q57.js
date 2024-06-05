// Question 57:-
// Write a JavaScript function that receives a string and determines whether or not it can be rearranged to become a palindrome.
// When a word, phrase, or sequence can be read both forward and backward, it is considered a palindrome. e.g., madam or nurses run.
// Test Data :
// ("maam") -> true
// ("civic") -> true
// ("IO") -> false
// (12321) -> "It must be a string."

function isPalindrome(str) {
    if(typeof str === 'string'){
        let str1 = str.split('');
        str1 = str1.reverse();
        str1 = str1.join('');
        if(str === str1){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(isPalindrome('maam'));
console.log(isPalindrome('civic'));
console.log(isPalindrome('IO'));
console.log(isPalindrome(1234));