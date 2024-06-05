// Question 09:-
// Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function convertCases(s){
    UPPER='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    lower='abcdefghijklmnopqrstuvwxyz';
    let check=str[0];
    let str1=[];
    for(i=0; i<s.length; i++){
        if(UPPER.indexOf(s[i]) !== -1){
            str1.push(s[i].toLowerCase());
        }
        else if(lower.indexOf(s[i])!== -1){
            str1.push(s[i].toUpperCase());
        }
        else{
            str1.push(s[i]);
        }
    }
    return str1;
}

const prompt=require("prompt-sync")();
let str = prompt("Enter the string to change cases: ");
console.log((convertCases(str)).join(''));