// Question 50:-
// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.
// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

function sumOfNumbers(arr) {
    let sum=0;
    for(i=0; i<arr.length;i++ ){
        if(typeof arr[i]  === "number"){
            sum=sum+ arr[i];
        }
    }
    return sum;
}

arr = [2, "11", 3, "a2", false, 5, 7, 1];
arr1 = [2, 3, 0, 5, 7, 8, true, false];
console.log("Original Array: ", arr);
console.log("Sum of all numbers of the said array: ",sumOfNumbers(arr));
console.log("Original Array: ", arr1);
console.log("Sum of all numbers of the said array: ",sumOfNumbers(arr1));