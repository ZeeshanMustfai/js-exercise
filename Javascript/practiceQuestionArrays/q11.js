// Question 11:-
// Write a JavaScript program to find the sum of squares of a numerical vector.

function sumofSquares(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=Math.pow(arr[i],2);
    }
    return sum;
}

let num=[1,2,3,4,5,6,7,8,9,10,11,12];
console.log("Sum of squares of a Numerical Vector: ", sumofSquares(num));

let hi= ("HELLO").toLowerCase();
console.log(hi);