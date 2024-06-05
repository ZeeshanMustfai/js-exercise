// Question 11:-
// Write a JavaScript function to print all the methods in a JavaScript object.
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

function all_properties(obj){
    let properties = Object.getOwnPropertyNames(obj);
    return properties;
}

console.log(all_properties(Array));
console.log(all_properties(Math));
console.log(all_properties(Object));