// // Question 25:-
// Write a JavaScript function to sort the following array of objects by title value.
// Sample object :
// var library = [ 
//    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
// ]

function sortArrayOfObjects(arr) {
    obj1=arr.sort(compare);
    return obj1;
}

function compare(a,b){
    if (a.title<b.title){
        return -1;
    }
    if (a.title>b.title){
        return 1;
    }
    return 0;
}

var library = [ 
    { author: 'Bill Gates', title: 'cThe Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'bWalter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'aMockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];

console.log(sortArrayOfObjects(library));