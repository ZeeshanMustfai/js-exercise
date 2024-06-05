// Question 40:-
// Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.
// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

function array_range(a,size) {
    arr= new Array(size);
    temp=a-1;
    for(i=0;i<size;i++){
        temp=temp+1;
        arr[i]=temp;
    }
    return arr;
}

console.log(array_range(1, 4));
console.log(array_range(-6, 4));