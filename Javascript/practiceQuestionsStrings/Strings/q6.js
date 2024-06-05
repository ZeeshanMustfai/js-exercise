// Question 6:-
// Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"

function protect_email(str) {
    index = str.search("@");
    lastPart= str.substr(index)
    console.log(lastPart);
    firstPart=str.substr(0,index);
    console.log(firstPart);
    size=firstPart.length;
    size=Math.ceil(size/3);
    firstPart=firstPart.substr(0,size+1);
    return (firstPart.concat('...')).concat(lastPart);
}

console.log(protect_email("robin_singh@example.com"));