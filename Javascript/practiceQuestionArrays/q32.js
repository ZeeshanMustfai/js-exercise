// Question:-32
// Write a JavaScript function to find an array containing a specific element.
// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]

function contains(a,n){
    return a.includes(n);
}

arr = [2, 5, 9, 6];
console.log(contains(arr,5));