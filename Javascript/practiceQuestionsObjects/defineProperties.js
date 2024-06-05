let obj1 = {
    name: 'Ali',
    age: '2',
    isHuman: true
};

Object.defineProperties(obj1, {name : {value: "dont show", writable: false},isHuman : {value: "true", writable: false}});
obj1.isHuman = false;
console.log(obj1);