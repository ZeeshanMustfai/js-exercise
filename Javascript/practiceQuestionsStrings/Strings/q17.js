// Question 17:-
// Write a JavaScript function to chop a string into chunks of a given length.
// Test Data :
// console.log(string_chop('w3resource'));
// console.log(string_chop('w3resource',2));
// console.log(string_chop('w3resource',3));
// ["w3resource"]
// ["w3", "re", "so", "ur", "ce"]
// ["w3r", "eso", "urc", "e"]

function string_chop(str, size) {
    if(size){
        arr=str.split("");
        arr1=[];
        i=0;
        j=0;
        if(size==2){
            for(x=0;x<arr.length;x+=size){
                arr1[j]=arr[i] + arr[i+1];
                j=j+1;
                i=i+2;
            }
            return arr1;
        }
        if(size==3){
            for(y=0;y<arr.length;y+=size){
                arr1[j]=arr[i] + arr[i+1] + arr[i+2];
                j=j+1;
                i=i+3;
            }
            return arr1;
        }
    }
    else{
        return str.split();
    }
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));