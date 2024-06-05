// Question 15:-
// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
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

console.log(entries)