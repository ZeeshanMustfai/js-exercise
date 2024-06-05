// Question 7:-
// Write a JavaScript program that returns a subset of a string.
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

function findSubsequences(str) {
    arr = [''];
    for (j of str) {
        const size = arr.length;
        for (let i = 0; i < size; i++) {
            arr.push(arr[i] + j);
        }
    }
    arr.splice(0,1);
    return arr;
}

console.log(findSubsequences('dog'));