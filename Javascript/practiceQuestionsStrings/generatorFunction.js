function* randomGn() {
    let i=0;
    yield i=i+2;
    yield i=i+99;
} 
let gen=randomGn();
console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());