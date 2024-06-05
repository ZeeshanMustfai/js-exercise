
const prompt=require("prompt-sync")();
let operator ;
let num1=10;
let num2=0;
operator=prompt("Enter a operator:");
switch(operator) {
    case '+':
        console.log(num1+num2);
     case "/":
        console.log(num1/num2);
        break;
        
    default:
        console.log('default');
}