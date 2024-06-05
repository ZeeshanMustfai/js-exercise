// Question 51:-
// Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.
// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:

function findIndexNaN(a) {
   var temp=[];
    for(i=0;i<a.length;i++){
        if(isNaN(a[i])){
            temp.push(i);
        }
    }
    return temp;
}

arr=[2, NaN, 8, 16, 32];
arr1=[2, 4, NaN, 16, 32, NaN];
arr2=[2, 4, 16, 32, NaN, NaN, NaN,5,3,NaN];
console.log("Orignal Array: " ,arr);
console.log("Find all indexes of NaN of the said array: ", findIndexNaN(arr));
console.log("Orignal Array: " ,arr1);
console.log("Find all indexes of NaN of the said array: ", findIndexNaN(arr1));
console.log("Orignal Array: " ,arr2);
console.log("Find all indexes of NaN of the said array: ", findIndexNaN(arr2));