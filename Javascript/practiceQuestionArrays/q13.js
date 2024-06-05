// Question 13:-
// Write a JavaScript program to add items to a blank array and display them.

const prompt=require("prompt-sync")();
let size = prompt("Enter the size of array you desire to make: ");
let arr=new Array(size);
for(i=0;i<size;i++){
    arr[i]=prompt("Enter value " + (i+1) + ": ");
}
console.log("Entered array is :",arr);