const prompt=require("prompt-sync")();

let count= prompt("Enter the size of Array you want: ");
count= parseFloat(count);
arr= new Array(count);
let ipt=0;
let value;
let check=0;
for(let i=0;i!==-1;i++){
    ipt=prompt("Enter index at which you want to enter value.");
    value=prompt("Enter the value to add:");
    arr[ipt]=value;
    check=prompt("Press 1 to select new index to add value or 0 to show array.");
    if(check == 1)
        {
            ipt=prompt("Enter index at which you want to enter value.");
            value=prompt("Enter the value to add:");
            arr[ipt]=value;    
            check=prompt("Press 1 to select new index to add value or 0 to show array.");    
        }
        else if (check == 0){
            console.log(arr);
            console.log("Thankyou.");
            break;
            i=-1;
        }
        else{
            console.log("Entered invalid option selector,");
        }
}

