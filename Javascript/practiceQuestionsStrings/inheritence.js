class Student{
    constructor (id,name){
        this.id=id;
        this.name=name;
    }
}

class Courses extends Student{
    constructor (id,name,courseId,courseName){
        super(id,name);
        this.courseId=courseId;
        this.courseName=courseName;
    }
}

// s1= new Student(1,"ali");
// s2= new Student(2,"ahmad");
// s3= new Student(3,"abdullah");
// s4= new Student(4,"husnain");
// console.log(s1,s2,s3,s4);

c1=new Courses(99,"aftab",2233, "Physics");


console.log(`${c1.name} roll no is ${c1.id}, he is currently enrolled in ${c1.courseName}`);