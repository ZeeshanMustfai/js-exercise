//  Question 49:-
// Write a JavaScript program that takes an array of numbers and returns the third smallest number.
// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0

function thirdSmallest(arr) {
    for(i=0;i<2;i++){
        x=Math.min(...arr);
        index=arr.indexOf(x);
        arr.splice(index,1);
    }
    x=Math.min(...arr);
    return x;
}

console.log("Original array of numbers: [2,3,5,7,1]");
console.log("Third smallest number of the said array of numers: ", thirdSmallest([2,3,5,7,1]));
console.log("Original array of numbers: [2,3,0,5,7,8,-2,-4]");
console.log("Third smallest number of the said array of numers: ", thirdSmallest([2,3,0,5,7,8,-2,-4]));