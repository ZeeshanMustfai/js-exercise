// Question 22:-
// Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(a,b) {
    arr1=a.flat(Infinity);
    arr2=b.flat(Infinity);
    const tempArray = arr1.concat(arr2);
    const unique = [...new Set(tempArray)];
    return unique;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));