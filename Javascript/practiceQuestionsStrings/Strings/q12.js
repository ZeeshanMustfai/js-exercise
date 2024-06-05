// Question 12:-
// Write a JavaScript function to uncommelize a string.
// Test Data :
// console.log(uncamelize('helloWorld'));
// console.log(uncamelize('helloWorld','-'));
// console.log(uncamelize('helloWorld','_'));
// "hello world"
// "hello-world"
// "hello_world"

function uncamelize(str,spr){
    const regex = /[A-Z]/g;
    if(spr){
        str= str.replace(regex,(txt) => {
            txt = txt.toLowerCase();
            let txt1 = spr.concat(txt);
            return txt1;
        });
        return str;
    }else{
        str= str.replace(regex,(txt) => {
            txt = txt.toLowerCase();
            let txt1=" ".concat(txt);
            return txt1;
        });
        return str;
    }
}

console.log(uncamelize('HelloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));