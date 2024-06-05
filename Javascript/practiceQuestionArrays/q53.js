// Question 53:-
// Write a JavaScript program to count the number of arrays inside a given array.
// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

function countArray(arr){
    count=0;
    for(i=0;i<arr.length; i++){
        if( Array.isArray(arr[i])){
            count = count +1;
        }
    }
    return count;
}

console.log(countArray([2,8,[3],3,5,3,4,[5,4]]));
console.log(countArray([2,8,[6,3,3],[4],5,[3,4,[5,4]]]));