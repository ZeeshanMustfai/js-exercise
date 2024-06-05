function insert(str,str1,index){
    if(str1){
        if(index){
            firstPart = str.slice(0,index);
            secondPart = str.slice(index);
            return (firstPart.concat(str1)).concat(secondPart);
        }
        else{
            return str1.concat(str);
        }
    }
    else{
        return str;
    }
}

console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',8));