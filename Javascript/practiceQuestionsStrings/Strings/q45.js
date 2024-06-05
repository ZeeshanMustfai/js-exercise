// Question 45:-
// Write a JavaScript function to get a humanized number with the correct suffix such as 1st, 2nd, 3rd or 4th.
// Test Data :
// console.log(humanize(1));
// console.log(humanize(20));
// console.log(humanize(302));
// "1st"
// "20th"
// "302nd"

function humanize(str){
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

console.log(humanize(1));
console.log(humanize(20));
console.log(humanize(302));