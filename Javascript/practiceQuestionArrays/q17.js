// Question 17:-
// Write a JavaScript program to shuffle an array.

let arr = [1,2,3,4,5,6,7,8,9,10,11,12];
console.log("Original Array: ", arr);
let i = arr.length;
let temp, index;
while(i>0){
    index = Math.floor(Math.random() * i);
    i--;
    temp = arr[i];
    arr[i] = arr[index];
    arr[index] = temp;
}
console.log("Shuffled Array: ", arr);