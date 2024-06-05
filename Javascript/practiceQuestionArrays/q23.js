// Question 23:-
// Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]

// function difference(arr1,arr2) {
//     tempArray = arr1.concat(arr2);
//     for(i=0;i<tempArray.length;i++){
//         for(j=i;j<tempArray.length;j++){
//             if(tempArray[i] == tempArray[j]){
//                 tempArray.splice(i,1);
//                 j=j-2;
//                 tempArray.splice(j,1);
//                 // console.log(tempArray)
//                 break;
//             }
//             break;
//         }
//         break;
//     }
//     return tempArray;
// }


function difference(a,b) {
    first = new Set([...a]);
    console.log(first);
    second = new Set([...b]);
    return (first.symmetricDifference(second));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));