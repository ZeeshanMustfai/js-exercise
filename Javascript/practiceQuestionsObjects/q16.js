// Question 15:-
// Write a JavaScript function to get a copy of the object where the keys become the values and the values are the keys
var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];

let size = library.length;
let entries = [];

for(i=0;i<size;i++){
    entries[i] = Object.entries(library[i]);
}

for(j=0;j<size;j++){
    for(k=0;k<(entries[j]).length;k++){
        entries[j][k] = entries[j][k].reverse();
    }
}


let obj = [];
for(l=0;l<size;l++){
    obj[l] = Object.fromEntries(entries[l]);
}

console.log("Original Object:")
console.log(library);
console.log("This is the Copy Object:")
console.log(obj);
a=Object.entries(obj[0]);
console.log(Object.fromEntries(a))