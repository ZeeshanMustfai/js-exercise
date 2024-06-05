const objects = [
    { 
        name: 'Ali',
        Class: 7,
        age: 14,
        marks: 24
    }, 
    { 
        name: 'Ahmad',
        Class: 7,
        age: 15,
        marks: 88
    }, 
    { 
        name: 'Ammar',
        Class: 7,
        age: 14.5,
        marks: 99
    }];
    
const totalMarks = objects.reduce(
  (a, b) => a + b.marks,
  0,
);

const avgMarks = (totalMarks/objects.length).toFixed(2);

console.log(`Total marks of all students are ${totalMarks}`);
console.log(`Average marks of all students are ${avgMarks}`);