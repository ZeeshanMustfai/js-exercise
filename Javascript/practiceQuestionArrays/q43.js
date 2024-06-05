// question 43:-
// Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.
// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]

function unzip(arr){
    let a = arr[0];
    let b = arr[1];
    let temp=[]
    for(i=0;i<a.length;i++){
        for(j=0; j<b.length;j++){
            if(i == j){
                temp[i] = [a[i] , b[j]];
            }
        }
    }
    return temp;
}

console.log(unzip([['a', 1, true, false], ['b', 2, false]]));