// Question 35:-
// Write a JavaScript function to get random items from an array.

function random_items(a) {
    return a[Math.floor(Math.random() * a.length)];
}

arr = [254, 21452, 425, 2112, 36455, 32543];
console.log(random_items(arr));