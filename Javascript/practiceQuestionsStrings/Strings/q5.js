// Question 5:-
// Write a JavaScript function to convert a string into abbreviated form.
// Test Data :
// console.log(abbrev_name("Robin Singh"));
// "Robin S."

function abbrev_name(str){
    index=str.search(" ");
    abr=str.slice(0,index+2);
    abr=abr.padEnd(abr.length+1,".")
    return abr;
}

console.log(abbrev_name("Robin Singh"));
console.log(abbrev_name("R Singh"));