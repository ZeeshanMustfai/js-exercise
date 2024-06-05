// Question 17:-
// Write a JavaScript function to check whether an object contains a given property.

var student = {
    name : "David Roy",
    sclass : "VI",
    rollno : 12,
};

console.log(Object.hasOwn(student, 'rollno'));