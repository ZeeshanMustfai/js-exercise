// Queston 38:-
// Write a JavaScript function to move an array element from one position to another.
// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]

function move(arr,a,b) {
    let temp;
    length=arr.length;
    if(a>-1 && b>-1){
        temp=arr[a];
        arr[a]=arr[b-1];
        arr[b-1]=temp;
    }
    if(a<0 && b<0){
        temp=arr[length+a];
        arr[length+a]= arr[length+b];
        arr[length+b]=temp;
    }
    if(a>-1 && b<0){
        temp=arr[a];
        arr[a]= arr[length+b];
        arr[length+b]=temp;
    }
    if(a<0 && b>-1){
        temp=arr[length+a];
        arr[length+a]= arr[b];
        arr[b]=temp;
    }
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, -2));
console.log(move([10, 20, 30, 40, 50], -1, -2));