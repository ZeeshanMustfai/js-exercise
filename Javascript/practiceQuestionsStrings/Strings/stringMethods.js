// String Length

str="abcabcabcdefghijkLmnOpqrstuvwxyz";
console.log(str.length);

//toUpperCase and toLowerCase

console.log(str.toUpperCase());
console.log(str.toLowerCase());

//concat

str1=" this is concat string.";
console.log(str.concat(str1));
console.log(str1.concat(str));

//trim
console.log(str.trim());

// padStart and padEnd

console.log(str.padStart(50,"x"));

//repeat
console.log(str.repeat(2));


//replace and replaceAll
console.log(str.replace("abc","ABC"));
console.log(str);
console.log(str.replaceAll("abc","ABC"));

//spit
console.log(str.split("j"));

//slice
console.log(str.slice(5));
console.log(str.slice(5,20));

//substring
abc="0123456789";
console.log(abc.slice(-4,9));
console.log(abc.substring(-4,9));

const str12='haga\hshsssh\ddjd'
s=String.raw`${str12}`
console.log(`${s}`)