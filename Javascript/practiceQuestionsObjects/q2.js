// Question 2:-
// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };

var student = {
    name : "David Roy",
    sclass : "VI",
    rollno : 12,
};

delete student.rollno;
console.log(student);

student.marks =100;
console.log(student);

a = student;
console.log(a)