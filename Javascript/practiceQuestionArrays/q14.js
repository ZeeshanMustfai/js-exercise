// Question 15:-
// Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

function isValidNumberIsNaN(str) {
    return isNaN(str);
}

function removeDuplicate(a){
    let temp = a[0];
    let temp1;
    let temp2;
    if(isValidNumberIsNaN(temp)){
        temp1 = temp.toUpperCase();
        temp2 = temp.toLowerCase();
    }
    for(i=1;i<a.length;i++){
        for(j=i;j<a.length;j++){
            if( temp == a[j] || temp1==a[j] ||temp2 == a[j] ){
                a.splice(j,1);
                j=j-1;
            }
        }
        temp = a[i];
        if(isValidNumberIsNaN(temp)){
            temp1 = temp.toUpperCase();
            temp2 = temp.toLowerCase();
        }
    }
    return a;
}
export default function sum(){
    return 99;
}
let arr=['1','a','b','a','A','d','a',1,2,3,1,'a'];
console.log(removeDuplicate(arr));