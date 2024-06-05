let obj1 = {
    name: 'Ali',
    age: '2',
    isHuman: true
};

Object.defineProperty( obj1, "name", { value: 'Dont show', writable:false } );
obj1.name = 'ahmad';
console.log(obj1);