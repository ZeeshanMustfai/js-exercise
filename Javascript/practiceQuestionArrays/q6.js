// Question 06:-
// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

function addDashes(n){
    let num= [n[0]];
    for(i=1; i<n.length;i++){
        if(n[i-1]%2==0 && n[i]%2==0){
            num.push("-",n[i]);
        }
        else{
            num.push(n[i]);
        }
    }
    return num;
}

const prompt=require("prompt-sync")();
let num = prompt("Enter the number to add dashes between even numbers: ");
console.log(addDashes(num).join(""));