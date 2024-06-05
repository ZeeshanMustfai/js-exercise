// Question 20:-
// Write a JavaScript program to find duplicate values in a JavaScript array.

function isValidNumberIsNaN(str) {
    return isNaN(str);
}

function duplicateElements(a){
    let temp = a[0];
    let arr=[];
    let x=0;
    for(i=1;i<a.length;i++){
        for(j=i;j<a.length;j++){
            if( temp === a[j] ){
                arr[x]=a[j];
                x=x+1;
                a.splice(j,1);
                j=j-1;
            }
        }
        temp = a[i];
    }
    return arr;
}

let arr=['1','a','b','a','A','d','a',1,2,3,1,'a','1'];
console.log(duplicateElements(arr));