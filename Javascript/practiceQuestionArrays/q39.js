// Question 39:-
// Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Test Data :
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
// [58, "abcd", true]

function isEligible(x) {
    if (x !== false || x !== null || x !== 0 || x !== "") {
      return x;
    }
}

function filter_array_values(a){
    a = a.filter(isEligible);
    return a;
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0,'abc','']));