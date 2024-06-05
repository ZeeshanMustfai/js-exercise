// Question 58:-
// Write a JavaScript program to find the most frequent character in a given string.
// Test Data :
// ("Madam") -> "a"
// ("civic") -> "c"
// ("HellloL223LLL") -> "L"
// (12321) -> "It must be a string."

function mostFrequentChar(str) {
    if(typeof str === 'string'){
        str = str.split('');
        temp = 0;
        frequent = 0;
        mfc = 0;
        for(i = 0; i<str.length; i++){
            for(j = i; j<str.length; j++){
                if(str[i]== str[j]){
                    temp = temp + 1;
                }
            }
            if(temp > frequent){
                frequent = temp;
                mfc = str[i];
            }
            temp = 0;
        }
        return mfc;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(mostFrequentChar("Madam"));
console.log(mostFrequentChar("civic"));
console.log(mostFrequentChar("HellloL223LLL"));
console.log(mostFrequentChar(12321));