// Question 19:-
// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

let array1 = [1,0,2,3,4];
let array2 = [3,5,6,7,8,13];
let arr = [];
let i=0;
console.log("Sample Array:");
console.log(array1);
console.log(array2);
if (array1.length === 0){
    console.log("array1 is empty");
}
if (array2.length === 0){
    console.log("array2 is empty");
}
while(i<array1.length && i<array2.length){
    arr.push(array1[i] + array2[i]);
    i++;
}
if (i === array1.length) {
    for (j = i; j < array2.length; j++) {
    arr.push(array2[j]);
    }
  } else {
    for (j = i; j < array1.length; j++) {
      arr.push(array1[j]);
    }
  }
console.log("Sample Array:");
console.log(array1);
console.log(array2);
console.log("Expected Output:");
console.log(arr);