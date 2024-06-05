// Question 34:-
// Write a JavaScript function to get the nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

function nthlargest(arr, n){
    for(i=1;i<n;i++){
        x=Math.max(...arr);
        index=arr.indexOf(x);
        arr.splice(index,1);
    }
    x=Math.max(...arr);
    return x ;
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652],4));