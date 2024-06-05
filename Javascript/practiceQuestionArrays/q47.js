// Question 47:-
// Write a JavaScript program to remove all false values from an object or array.
// Test Data :
// const obj = {
// a: null,
// b: false,
// c: true,
// d: 0,
// e: 1,
// f: '',
// g: 'a',
// h: [null, false, '', true, 1, 'a'],
// i: { j: 0, k: false, l: 'a' }
// Expected Output:
// {"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' } 
};
const obj1={};
for(i in obj){
    x=Object.values(obj.i);
    if(x !== null && x !== false && x !== '' && x !== 0){
        console.log(x);
    }
}
// didnt complete