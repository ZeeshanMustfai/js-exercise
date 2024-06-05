class Student {
    constructor (id,name,age,marks){
        this.id=id;
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    studentPerfermance(){
        console.log(`${this.name} is a Good Student.`);
    }
}

s1=new Student(1122,"ali",22,100);
console.log(s1.name);
s1.studentPerfermance();

s2= new Student();
s2.name="ahmad";
s2.studentPerfermance();

s2.marks= 90;
let marks= s1.marks +s2.marks;
console.log(marks);
console.log(s2.name);