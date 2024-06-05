// Question 48:-
// Write a JavaScript function to get the successor to a string.
// Note: The successor is calculated by incrementing characters starting from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the string. Incrementing a digit always results in another digit, and incrementing a letter results in another letter of the same case. If the increment generates a carry, the character to the left of it is incremented. This process repeats until there is no carry, adding an additional character if necessary.
// Example :
// string.successor("abcd") == "abce"
// string.successor("THX1138") == "THX1139"
// string.successor("< >") == "< >"
// string.successor("1999zzz") == "2000aaa"
// string.successor("ZZZ9999") == "AAAA0000"
// Test Data :
// console.log(successor('abcd'));
// console.log(successor('3456'));
// "abce"
// "3457"

function successor(str) {
    if(typeof str === 'string'){
        const regex = /[a-z0-9]+/gi;
        str = str.split('');
        arr = [];
        j = 0;
        for(i=0;i<str.length;i++){
            if(!str[i].match(regex)){
                return str.join('');
            }
        }
        size = str.length;
        if(size === 0){
            message = "The string is empty.";
            return message;
        }
        else{
            temp = str[size-1].charCodeAt();
            temp = temp + 1;
            str[size-1] = String.fromCharCode(temp);
            return str.join('');
        }
    }
    else{
        message = "It must be a string.";
        return message;
    }
}

console.log(successor('abcd'));
console.log(successor('THX1138'));
console.log(successor('< >'));
console.log(successor('1999zzz'));
console.log(successor('ZZZ9999'));
console.log(successor('3456'));
console.log(successor(''));
console.log(successor(1234));

// carry part not done.....