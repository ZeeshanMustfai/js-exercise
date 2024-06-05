//  Question 08:-
// Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

let arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let temp = 1;
let count = 0;
let num;

for (i = 0; i < arr.length; i++) {
    for (j = i; j < arr.length; j++) {
        if (arr[i] == arr[j]){
            count++;
        }
        if (temp < count) {
            temp = count;
            num = arr[i];
        }
    }
    count = 0;
}

console.log(num + " ( " + temp + " times ) ");