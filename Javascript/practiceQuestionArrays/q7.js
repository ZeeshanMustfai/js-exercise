//  Question 07:-
// Write a JavaScript program to sort the items of an array.
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

function compare(a,b){
    return a-b;
}

let arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log((arr.sort(compare)).toString());