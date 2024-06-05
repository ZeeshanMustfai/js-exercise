// Question 50:-
// Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case.
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
// Test Data :
// ('$22_|1372^2731|_22') -> true
// ('12%^&2') -> false
// ('234%$$%432') -> true
// (1234) -> "It must be string"
// ('aba%$aba') -> true
// ('Aba%$aba') -> true

function palindromeOnlyAlphanumeric(str){
    if(typeof str === 'string'){
        const regex = /[a-z0-9]+/gi;
        str = str.split('');
        arr = [];
    
        for(i=0;i<str.length;i++){
            if(str[i].match(regex)){
                str[i] = str[i].toLowerCase();
                arr.push(str[i]);
            }
        }
        arr1 = [...arr];
        arr = arr.reverse();
        arr = arr.join('');
        arr1 = arr1.join('');
        if(arr == arr1){
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

console.log(palindromeOnlyAlphanumeric('$22_|1372^2731|_22'));
console.log(palindromeOnlyAlphanumeric('12%^&2'));
console.log(palindromeOnlyAlphanumeric('234%$$%432'));
console.log(palindromeOnlyAlphanumeric('aba%$aba'));
console.log(palindromeOnlyAlphanumeric('Aba%$aba'));
console.log(palindromeOnlyAlphanumeric(1234));