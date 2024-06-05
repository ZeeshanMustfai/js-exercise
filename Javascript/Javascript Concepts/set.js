let x=new Set(['foo', 'bar', undefined]);
console.log(x);
function check(){
    x=1;
    return x;
}

console.log(x.forEach(check));