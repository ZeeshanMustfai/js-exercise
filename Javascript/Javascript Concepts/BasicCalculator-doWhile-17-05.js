function additionFunction(a, b) {
  return a + b;
}

function subtractionFunction(a, b) {
  return a - b;
}

function multiplicationFunction(a, b) {
  return a * b;
}

function divisionFunction(a, b) {
  return a / b;
}

function isValidNumberIsNaN(str) {
  return !isNaN(str);
}

const prompt=require("prompt-sync")();
let check=10;
let check1=0;
let check2=0;
check=parseFloat(prompt("Enter 1 to start and 0 to terminate: "));
if(check === 2)
  {
    console.log("Entered option is invalid.");
    return 0;
  }

do{
  if(check !== 1 || check === 0 || check === 2)
    {
      if(check === 2)
        {
          if(isValidNumberIsNaN(x) && isValidNumberIsNaN(y)) {
            x=parseFloat(x);
            y=parseFloat(y);
            console.log("Enter the option to start computing your numbers.");
            console.log("Enter A or a to add both numbers:");
            console.log("Enter B or b to subtract both numbers:");
            console.log("Enter C or c to multiply both numbers:");
            console.log("Enter D or d to divide both numbers:");
            var opt= prompt("Option:");
            if (opt==="A" || opt==="a") {
                let sum = additionFunction(x, y);
                console.log(sum);
            } else if (opt==="B" || opt==="b") {
                let sub = subtractionFunction(x, y);
                console.log(sub);
            } else if (opt==="C" || opt==="c") {
                let mul = multiplicationFunction(x, y);
                console.log(mul);
            } else if (opt==="D" || opt==="d") {
                let div = divisionFunction(x, y);
                console.log(div);
            } else{
              console.log("Entered option is invalid. Enter Option Again.");
              check1=-1;
              while(check1 === -1){
                if(check1 === -1){
                  console.log("Enter the option to start computing your numbers.");
                  console.log("Enter A or a to add both numbers:");
                  console.log("Enter B or b to subtract both numbers:");
                  console.log("Enter C or c to multiply both numbers:");
                  console.log("Enter D or d to divide both numbers:");
                  var opt= prompt("Option:");
                  if (opt==="A" || opt==="a") {
                      var sum = additionFunction(x, y);
                      console.log(sum);
                  } else if (opt==="B" || opt==="b") {
                      var sub = subtractionFunction(x, y);
                      console.log(sub);
                  } else if (opt==="C" || opt==="c") {
                      var mul = multiplicationFunction(x, y);
                      console.log(mul);
                  } else if (opt==="D" || opt==="d") {
                      var div = divisionFunction(x, y);
                      console.log(div);
                  }else{
                    console.log("Entered option is invalid. Enter Option Again.");
                    check1=-1;
                    continue;
                  } 
                }
                check1 = 100;
              }
          }
        } else{
            console.log("Entered values are Invalid.");
          }
          check=parseFloat(prompt("Enter 0 to terminate calculating, 1 to continue calculating and 2 to perform different operation on the previously entered numbers: "));
          continue;
        }
      break;
    } 
    else{
    console.log("Enter two Number's to proceed further:");
    var x=(prompt("Enter First number: "));
    var y=(prompt("Enter Second number: "));
  
    if(isValidNumberIsNaN(x) && isValidNumberIsNaN(y)) {
      x=parseFloat(x);
      y=parseFloat(y);
      console.log("Enter the option to start computing your numbers.");
      console.log("Enter A or a to add both numbers:");
      console.log("Enter B or b to subtract both numbers:");
      console.log("Enter C or c to multiply both numbers:");
      console.log("Enter D or d to divide both numbers:");
      var opt= prompt("Option:");
      if (opt==="A" || opt==="a") {
          var sum = additionFunction(x, y);
          console.log(sum);
      } else if (opt==="B" || opt==="b") {
          var sub = subtractionFunction(x, y);
          console.log(sub);
      } else if (opt==="C" || opt==="c") {
          var mul = multiplicationFunction(x, y);
          console.log(mul);
      } else if (opt==="D" || opt==="d") {
          var div = divisionFunction(x, y);
          console.log(div);
      } else{
          console.log("Entered option is invalid. Enter Option Again.");
          check1=-1;
          while(check1 === -1){
            if(check1 === -1){
              console.log("Enter the option to start computing your numbers.");
              console.log("Enter A or a to add both numbers:");
              console.log("Enter B or b to subtract both numbers:");
              console.log("Enter C or c to multiply both numbers:");
              console.log("Enter D or d to divide both numbers:");
              var opt= prompt("Option:");
              if (opt==="A" || opt==="a") {
                  var sum = additionFunction(x, y);
                  console.log(sum);
              } else if (opt==="B" || opt==="b") {
                  var sub = subtractionFunction(x, y);
                  console.log(sub);
              } else if (opt==="C" || opt==="c") {
                  var mul = multiplicationFunction(x, y);
                  console.log(mul);
              } else if (opt==="D" || opt==="d") {
                  var div = divisionFunction(x, y);
                  console.log(div);
              }else{
                console.log("Entered option is invalid. Enter Option Again.");
                check1=-1;
                continue;
              } 
            }
            check1 = 100;
          }
      }
    } else{
      console.log("Entered values are Invalid.");
     }
  }
  check=parseFloat(prompt("Enter 0 to terminate calculating, 1 to continue calculating and 2 to perform different operation on the previously entered numbers: "));
} while(check === 1 || check === 2);