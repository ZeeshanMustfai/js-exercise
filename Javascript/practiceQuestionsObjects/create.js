let obj1 = {
    name: 'Ali',
    age: '2',
    isHuman: true
};
let obj = Object.create(obj1, marks);
obj.name = "Ahmad";
console.log(obj);

// It is used to store keys and values in its prototype. when we console it displays empty object.