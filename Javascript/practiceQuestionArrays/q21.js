// Question 21:-
// Write a JavaScript program to flatten a nested (any depth) array. If you pass shallow, the array will only be flattened to a single level.
// Sample Data :
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
// [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
// [1, 2, 3, [[4]], 5, 6]

function flatten(arr,n){
    if(!n ){
        return arr.flat(Infinity);  
         
    }
    else
    return arr.flat(n);
}

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));