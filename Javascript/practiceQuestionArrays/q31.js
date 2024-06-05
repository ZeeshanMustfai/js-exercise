// Question 31:-
// Write a JavaScript function to remove a specific element from an array.
// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function remove_array_element(arr, n) {
    for(i=0;i<arr.length;i++){
        if(arr[i]==n){
            arr.splice(i,1);
            i=i-1;
        }
    }
    return arr;
}

console.log(remove_array_element([2, 5, 9, 6, 5, 5], 5));