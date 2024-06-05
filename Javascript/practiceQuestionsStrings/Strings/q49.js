// Question 49:-
// Write a JavaScript function to get a guid (an acronym for 'Globally Unique Identifier'?) of the specified length, or 32 by default.
// Test Data :
// console.log(guid());
// console.log(guid(15));
// "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
// "b7pwBqrZwqaDrex"

function guid(size) {
    getRandomNumber = (x, y) => {
        return Math.floor(Math.random() * (x - y) + y);
    }
    arr = [];
    randomPicker = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if(size){
        for(i=0 ; i<size ; i++){
            arr.push(randomPicker[getRandomNumber(0,randomPicker.length)]);
        }
    }
    else{
        for(i=0 ; i<32 ; i++){
            arr.push(randomPicker[getRandomNumber(0,randomPicker.length)]);
        }
    }
    return arr.join('');
}

console.log(guid());
console.log(guid(15));