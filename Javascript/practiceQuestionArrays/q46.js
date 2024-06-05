// Question 46:-
// Write a JavaScript program to generate all permutations of an array's elements (including duplicates).
// Test Data :
// [1, 33, 5]
// [1, 3, 5, 7]
// [2, 4]
// Expected Output:
// [[1,33,5],[1,5,33],[33,1,5],[33,5,1],[5,1,33],[5,33,1]]
// [[1,3,5,7],[1,3,7,5],[1,5,3,7],[1,5,7,3],[1,7,3,5],[1,7,5,3],[3,1,5,7],[3,1,7,5],[3,5,1,7],[3,5,7,1],[3,7,1,5],[3,7,5,1],[5,1,3,7],[5,1,7,3],[5,3,1,7],[5,3,7,1],[5,7,1,3],[5,7,3,1],[7,1,3,5],[7,1,5,3],[7,3,1,5],[7,3,5,1],[7,5,1,3],[7,5,3,1]]
// [[2,4],[4,2]]

function permutationArray(arr) {
    if (arr.length === 0) {
        return [];
    }
    if (arr.length === 1) {
        return [arr];
    }
    let temp=[];
    for(let i=0;i<arr.length;i++){
        const x=arr[i];
        const remaining = arr.slice(0,i).concat(arr.slice(i+1));
        const remainingNumsPermuted = permutationArray(remaining);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [x].concat(remainingNumsPermuted[j]);
            temp.push(permutedArray);
            }
    }
    return temp;
}

console.log(permutationArray([1,33,5]));
console.log(permutationArray([1,3,5,7]));
console.log(permutationArray([2,4]));