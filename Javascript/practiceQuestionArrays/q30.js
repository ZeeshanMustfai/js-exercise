// Question 30:-
// Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]

function removeDuplicate(a){
    let temp = a[0];
    for(i=1;i<a.length;i++){
        for(j=i;j<a.length;j++){
            if( temp == a[j] ){
                a.splice(j,1);
                j=j-1;
            }
        }
        temp = a[i];
    }
    return a;
}

function merge_array(arr1, arr2) {
    let array1 = removeDuplicate(arr1);
    let array2 = removeDuplicate(arr2);
    let arr = array1.concat(array2);
    let arr11 = removeDuplicate(arr);
    return arr11;
}

let array1 = [1, 2, 3];
let array2 = [2, 30, 1];
console.log(merge_array(array1, array2));