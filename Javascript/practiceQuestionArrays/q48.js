// Question 48:-
// Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false

function checkPrimeNumbers(arr) {
    for(i in arr){
        for(j=2;j<arr[i];j++){
            if(arr[i]%j == 0){
                return false;
            }
        }
    }
    return true;
}

console.log('In the said array check every numbers are prime or not!',checkPrimeNumbers([2,3,5,7]));
console.log('In the said array check every numbers are prime or not!',checkPrimeNumbers([2,3,5,7,8]));