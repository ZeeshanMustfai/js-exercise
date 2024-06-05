// Question 24:-
// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function isEligible(x) {
    if (x !== false || x !== null || x !== 0 || x !== "" || x !== undefined || !x.isNaN) {
      return x;
    }
}

function remove_array_values(a){
    a = a.filter(isEligible);
    return a;
}

console.log(remove_array_values([NaN, 0, 15, false, -22, '',undefined, 47, null]));