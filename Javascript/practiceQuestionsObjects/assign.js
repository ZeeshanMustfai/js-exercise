let obj1 = {
    a: '1',
    b: '2'
};
let obj2 = {
    c: '1',
    d: '2'
};
let obj3 = {
    e: '1',
    f: '2'
};
let obj = {};
Object.assign(obj,obj1,obj3,obj2);
console.log(obj)

//first parameter is always the targeted object, wheras others ae source.