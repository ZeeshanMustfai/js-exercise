// Question 15:-
// Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Test Data :
// console.log(humanize_format());
// console.log(humanize_format(1));
// console.log(humanize_format(8));
// console.log(humanize_format(301));
// console.log(humanize_format(402));
// "1st"
// "8th"
// "301st"
// "402nd"

function humanize_format(str) {
    str=parseFloat(str);
    if(typeof str == "number"){
        str=str.toString();
        if(str.endsWith("1") && !str.endsWith("11")){
            return str.concat("st");
        }
        if(str.endsWith("11")){
            return str.concat("th");
        }
        if(str.endsWith("2")){
            return str.concat("nd");
        }
        if(str.endsWith("3")){
            return str.concat("rd");
        }
        else{
            return str.concat("th");
        }
    }
}

console.log(humanize_format(1));
console.log(humanize_format(11));
console.log(humanize_format(8));
console.log(humanize_format(301));
console.log(humanize_format(402));
console.log(humanize_format("333"));