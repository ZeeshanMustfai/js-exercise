// const prompt=require("prompt-sync")();

var specialChars = "<>@!#$%^&*()_+[]{}?:;|'\"\\,./~`-=";
var checkForSpecialChar = function(string){
 for(i = 0; i < specialChars.length;i++){
   if(string.indexOf(specialChars[i]) > -1){
       return true
    }
 }
 return false;
}

function isValidNumberIsNaN(str) {
    return !isNaN(str);
}

function sumFunction(a, b, c, d, e, f, g, h) {
    return a + b + c + d + e + f + g + h;
}

function calcPercentage(sum) {
    return ( sum / 800 ) * 100;
}

console.log('welcome! This is Grade Calculator');
let name= (prompt("Enter your name: "));
if(name == "" || isValidNumberIsNaN(name)) {
    console.log("Please enter a valid name.");
    return 0;
}
let rollNumber= (prompt("Enter your roll number: "));
if(checkForSpecialChar(rollNumber)) {
    console.log("Please enter roll number in valid format.");
    return 0;
}
let eng=(prompt("Enter your marks in English (0-100): "));
if ((eng == "" || !isValidNumberIsNaN(eng)) || (eng<0 || eng>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let urdu=(prompt("Enter your marks in Urdu (0-100): "));
if (urdu == "" || !isValidNumberIsNaN(urdu) || (urdu<0 || urdu>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let maths=(prompt("Enter your marks in Mathematics (0-100): "));
if (maths == "" || !isValidNumberIsNaN(maths) || (maths<0 || maths>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let comp=(prompt("Enter your marks in Computer/Biology (0-100): "));
if (comp == "" || !isValidNumberIsNaN(comp) || (comp<0 || comp>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let phy=(prompt("Enter your marks in Physics (0-100): "));
if (phy == "" || !isValidNumberIsNaN(phy) || (phy<0 || phy>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let chem=(prompt("Enter your marks in Chemistry (0-100): "));
if (chem == "" || !isValidNumberIsNaN(chem) || (chem<0 || chem>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let pakstd=(prompt("Enter your marks in Pakistan Studies (0-100): "));
if (pakstd == "" || !isValidNumberIsNaN(pakstd) || (pakstd<0 || pakstd>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let islamiat=(prompt("Enter your marks in Islamiat (0-100): "));
if (islamiat == "" || !isValidNumberIsNaN(islamiat) || (islamiat<0 || islamiat>100)) {
    console.log("Marks entered are in inavlid format.");
    return 0;
}
let sum = 0;

if(isValidNumberIsNaN(eng) && isValidNumberIsNaN(urdu) && isValidNumberIsNaN(maths) && isValidNumberIsNaN(comp) && isValidNumberIsNaN(phy) && isValidNumberIsNaN(chem) && isValidNumberIsNaN(pakstd) && isValidNumberIsNaN(islamiat)) {
    urdu=parseFloat(urdu);
    eng=parseFloat(eng);
    maths=parseFloat(maths);
    comp=parseFloat(comp);
    phy=parseFloat(phy);
    chem=parseFloat(chem);
    pakstd=parseFloat(pakstd);
    islamiat=parseFloat(islamiat);
    sum = sumFunction(eng, urdu, maths, comp, phy, chem, pakstd, islamiat);
    let percentage= calcPercentage(sum);
    console.log("Name:", name);
    console.log("Roll Number:", rollNumber);
    console.log("English:", eng, "/ 100 marks.");
    console.log("Urdu:", urdu, "/ 100 marks.");
    console.log("Mathematics:", maths, "/ 100 marks.");
    console.log("Physics:", phy, "/ 100 marks.");
    console.log("Chemistry:", chem, "/ 100 marks.");
    console.log("Computer/ Biology:", comp, "/ 100 marks.");
    console.log("Pakistan Studies:", pakstd, "/ 100 marks.");
    console.log("Islamiat:", islamiat, "/ 100 marks.");
    console.log("Obtained Marks = ", sum, "/ 800.");
    console.log("Obtained Percentage = ", percentage, "%.");

    if(percentage<=100 && percentage>=90){
        console.log("Obtained Grade = 'A+'");
    } else if(percentage<90 && percentage>=80){
        console.log("Obtained Grade = 'A'");
    }else if(percentage<80 && percentage>=70){
        console.log("Obtained Grade = 'B'");
    } else if(percentage<70 && percentage>=60){
        console.log("Obtained Grade = 'C'");
    } else if(percentage<60 && percentage>=50){
        console.log("Obtained Grade = 'D'");
    } else {
        console.log("Obtained Grade = 'FAIL!!'");
    }
    console.log("Thankyou for using Student Grade Calculator.");
} else{
    console.log("Entered values are Invalid.");
}