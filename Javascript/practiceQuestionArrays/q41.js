// Question 41:-
// Write a JavaScript function to generate an array between two integers of 1 step length.
// Test Data :
// console.log(rangeBetween(4, 7));
// [4, 5, 6, 7]
// console.log(rangeBetween(-4, 7));
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

function rangeBetween(a,b) {
    let arr=[];
    for(i=0; a<=b;a++){
        arr.push(a);
        i++;
    }
    return arr;
}

console.log(rangeBetween(4, 7));
console.log(rangeBetween(-4, 7));