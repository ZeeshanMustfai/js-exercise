// Question 12:-
// Write a JavaScript program to compute the sum and product of an array of integers.

function sumOfArray(arr){
    let sum=0;
    for(i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

function productOfArray(arr){
    let product=arr[0];
    for(i=1;i<arr.length;i++){
        product*=arr[i];
    }
    return product;
}

let num=[1,2,3,4,5,6,7,8,9,10,11,12];
console.log("Sum of array elements: ", sumOfArray(num));
console.log("Product of array elements: ", productOfArray(num));