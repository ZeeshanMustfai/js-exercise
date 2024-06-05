let grocery = [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "goat", type: "meat", quantity: 23 },
    { name: "cherries", type: "fruit", quantity: 5 },
    { name: "fish", type: "meat", quantity: 22 },
];

let group = Object.groupBy(grocery, ({type}) => type);
console.log(group);
let group1 = Object.groupBy(grocery, ({quantity}) => quantity > 5 ? "Good" : "Restock");
console.log(group1);

// It is only applicable on iterable. 