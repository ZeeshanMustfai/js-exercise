//  Question 29:-
// Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.
// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function num_string_range(start,end,space){
    x=start.charCodeAt();
    y=end.charCodeAt();
    size=((y-x)+1)/space;
    size=Math.ceil(size);
    arr= new Array(size);
    for(i=0;i<arr.length;i++){
            arr[i]=String.fromCharCode(x);
            x=x+space;
    }
    return arr;
}

console.log(num_string_range('a', "z", 6));