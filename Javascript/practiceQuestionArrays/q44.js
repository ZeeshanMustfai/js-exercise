//Question 44:-
// Write a JavaScript function to create an object from an array, using the specified key and excluding it from each value.
// Test Data :
// indexOn([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ], x => x.id)
// Expected Output:
// {"undefined":{"id":20,"name":"orange"}}

function indexOn(arr, a) {
    obj1=arr.find((obj) => obj.id == a);
    return {obj1};
}

console.log(indexOn([{ id: 10, name: 'apple' }, { id: 20, name: 'orange' },{ id: 30, name: 'mango' }], 30 ));