// Question 52:-
// Write a JavaScript program to determine if a given word is exceeding word or not.
// There is an increasing gap between two adjacent characters in exceeding words. In ASCII, the gap represents the distance between two characters.
// Test Data :
// 'acgl' -> true
// 'aebc' -> false

function isExceeding(str) {
    if(typeof str === 'string'){
        str = str.split('');
        let exceeding = 0;
        for(i in str){
            if(str[i]   === ' '){
                return false;
            }
            else{
                temp = str[i].charCodeAt();
                if(temp > exceeding){
                    exceeding = str[i].charCodeAt();
                }
                else{
                    return false;
                }
            }
        }
        return true;
    }
    else{
        message = "It must be a string.";
        return message;
    }
}
console.log(isExceeding('acgl'));
console.log(isExceeding('aebc'));
console.log(isExceeding(1234));