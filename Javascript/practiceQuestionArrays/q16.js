// Question 16:-
// Write a JavaScript program to find the leap years in a given range of years.

const prompt=require("prompt-sync")();
let start=prompt("Enter the year from which you want to start looking for Leap year: ");
let end=prompt("Enter the year at which you want to stop looking for Leap year: ");
start=parseFloat(start);
end=parseFloat(end);
for(i=start;i<=end;i++){
    if((2024-i)%4==0){
        console.log(i+ " Is a Leap Year.");
    }
}