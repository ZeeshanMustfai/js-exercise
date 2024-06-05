// Question 27:-
// Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function isEligible(x) {
    if (x !== false || x !== null || x !== 0 || x !== "" || x !== undefined || !x.isNaN) {
      return x;
    }
}

function retrieve_array_values(a){
    arr = a.filter(isEligible);
    return arr;
}

console.log(retrieve_array_values([NaN, 0, 15, false, -22, '',undefined, 47, null]));