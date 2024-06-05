// Question 36:-
// Write a JavaScript function to create a specified number of elements with a pre-filled numeric value array.
// Test Data :
// console.log(array_filled(6, 0));
// [0, 0, 0, 0, 0, 0]
// console.log(array_filled(4, 11));
// [11, 11, 11, 11]
// Question 37:-
// console.log(array_filled(3, 'default value'));
// ["default value", "default value", "default value"]
// console.log(array_filled(4, 'password'));
// ["password", "password", "password", "password"]

function array_filled(size,n){
    let array= new Array(size);
    array.fill(n);
    return array;
}

console.log(array_filled(6,0));
console.log(array_filled(4,"default value"));